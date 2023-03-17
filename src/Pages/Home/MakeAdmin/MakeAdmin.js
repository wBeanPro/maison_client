import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {

     const [email, setEmail] = useState('')

     const handleOnBlur = e =>{
          setEmail(e.target.value)
     }

     const handleAdminSubmit = e =>{
          const user = {email};
           fetch('https://fierce-fortress-23524.herokuapp.com/users/admin',{
                method: 'PUT',
                headers:{
                     'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
           })
           .then(res => res.json())
           .then( data =>{
               if(data.modifiedCount){
                    alert('Make Admin successfully')
               }
           })
          e.preventDefault()
     }

     return (
          <Box>
               <Typography sx={{textAlign:'center'}} variant="h4">
                    Make An Admin 
               </Typography>

               <Box sx={{textAlign:'center'}} >
               <form onSubmit={handleAdminSubmit}>
               <TextField id="standard-basic"
               sx={{width:'50%'}}
                label="Enter Email " 
                variant="standard"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                 />
                 <br/>
                 <Button sx={{mt:3}} type="submit" variant="contained" color="inherit">Make Admin</Button>
               </form>
               
          </Box>
          </Box>
     );
};

export default MakeAdmin;
