import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
const AddProducts = () => {



     const { register, handleSubmit , reset} = useForm();
     const onSubmit = data =>{
          console.log(data)
          
           fetch("https://fierce-fortress-23524.herokuapp.com/products", {
               method: "POST",
               headers: { "content-type": "application/json" },
               body: JSON.stringify(data),
               })
               .then((res) => res.json())
               .then(result =>{
                    if(result.insertedId){
                         alert('Your Order successfully')
                         reset()
                    }
               })
          
          };
     return (
         <Container>
              <Box>
               <Typography sx={{textAlign:'center', fontWeight:'600', mt:8, mb:5}} variant="h4">
                    Add Products 
               </Typography>
              </Box>

              <Box className="product-form" >
              <form onSubmit={handleSubmit(onSubmit)}>
               <input  {...register("title",  { required: true })} placeholder="Product title" />
               <input   type="number" {...register("price",  { required: true })} placeholder="Price" />
               <input  {...register("img",  { required: true })} placeholder="Image url" />
               <input className="placebtn" type="submit"  value="Place Order"/>
               </form>
              </Box>

         </Container>
     );
};

export default AddProducts;