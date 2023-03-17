import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,  signOut , onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider , updateProfile  } from "firebase/auth";

initializeAuthentication()

const useFirebase = () =>{
     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const [authError, setAuthError] = useState('');
     const [admin, setAdmin] = useState(false)


     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider()

      //registerUser
      const registerUser =(email, password, name, navigate) =>{
          setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {

              setAuthError('')
              const newUser = {email, displayName:name}
              setUser(newUser)
              
              //SAVED USER IN DATABASE
              saveUser(email, name, 'POST')
              //Send name to firebase 
              updateProfile(auth.currentUser, {
               displayName: name
             }).then(() => {
               
             }).catch((error) => {
               
             });
             navigate('/');
          })
          .catch((error) => {
          setAuthError(error.message);
          
          })
          .finally(()=> setIsLoading(false));
          
      }


       //LoginUser
       const loginUser = (email , password, location, navigate) =>{
          setIsLoading(true)
          signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
               const destination = location?.state?.from || '/';
               navigate(destination)
               setUser(result.user)
               setAuthError('')
          })
          .catch((error) => {
          setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));;

     }


     //Google SignIn
     const googleUserSignIn = (location, navigate) =>{
          setIsLoading(true)
          signInWithPopup(auth, googleProvider)
          .then((result) => {
               
               const user = result.user;
               //SAVED DATA IN DATABASE
               saveUser(user.email, user.displayName, 'PUT')
               const destination = location?.state?.from || '/';
               navigate(destination)
               setAuthError('');
          }).catch((error) => {
               setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));
     }

     //LogoutUser
     const logOut = () =>{
          setIsLoading(true)
          signOut(auth).then(() => {
               setUser({})
             }).catch((error) => {
               setAuthError(error.message);
             })
             .finally(()=> setIsLoading(false));;
     }


     //Observer user state
     useEffect( ()=>{
          const unsubscribe = onAuthStateChanged(auth, (user) => {
                  if (user) {
                    setUser(user)
                    
                  } else {
                    setUser({})
                  }
                  setIsLoading(false)
                });
             return ()=> unsubscribe;
        },[])


           //SAVE USER TO DATABASE
           const saveUser = (email, displayName, method) =>{
               const user ={email, displayName}
               fetch('https://fierce-fortress-23524.herokuapp.com/users',{
                    method: method,
                    headers:{
                         'content-type':'application/json'
                    },
                    body: JSON.stringify(user)
               })
               .then(res => res.json())
               .then(data => console.log(data))

          }

          //ADMIN CONDITIONAL DATALOAD
          useEffect( ()=>{
               fetch(`https://fierce-fortress-23524.herokuapp.com/users/${user.email}`)
               .then(res => res.json())
               .then(data => setAdmin(data.admin))
          },[user.email])


        return{
          user,
          isLoading,
          authError,
          registerUser,
          loginUser,
          logOut,
          admin,
          googleUserSignIn

     }

}

export default useFirebase;