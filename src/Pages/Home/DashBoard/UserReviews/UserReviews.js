import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const UserReviews = () => {
     const {user} = useAuth()
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = data =>{
          
          console.log(data)
          
           fetch("https://fierce-fortress-23524.herokuapp.com/reviews", {
               method: "POST",
               headers: { "content-type": "application/json" },
               body: JSON.stringify(data),
               })
               .then((res) => res.json())
               .then(result =>{
                    if(result.insertedId){
                         alert('Your Review successfully')
                         reset()
                    }
               })
          
           };
     return (
          <Box>
               <Typography sx={{fontWeight:'500', color:'#252525', textAlign:'center', my:8}} variant="h4">
                    Your Review
               </Typography>


               <Box sx={{width:'70%'}} className="product-form">
               <form onSubmit={handleSubmit(onSubmit)}>
               <input  defaultValue={user.displayName}{...register("name",  { required: true })} placeholder="Name" />
               <input defaultValue={user.email} type="email"  {...register("email",  { required: true })} placeholder="Your email" />
               <textarea   {...register("review",  { required: true })} placeholder="Write Your review here" />
               
               <input className="placebtn" type="submit"  value="Your Review "/>
               </form>
               </Box>

          </Box>
     );
};

export default UserReviews;