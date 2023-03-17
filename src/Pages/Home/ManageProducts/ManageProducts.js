import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {

     const [displayProducts, setDisplayProducts] = useState([]);
     

     useEffect( ()=>{
          fetch(`https://fierce-fortress-23524.herokuapp.com/products`)
               .then(res => res.json())
               .then(data => {
               setDisplayProducts(data);
               
               });
          },[])


     return (
          <Container sx={{marginTop:"80px", marginBottom:"60px"}}>

         <Typography sx={{fontWeight:'medium', mt:3}} variant="h4">
             MANAGE ALL PRODUCTS {displayProducts?.length}
         </Typography>
               <TableContainer component={Paper}>
                    <Table  aria-label="simple table">
                    <TableHead>
                         <TableRow>
                         <TableCell>Product Title</TableCell>
                         <TableCell align="right">Price</TableCell>
                         <TableCell align="center">Manage</TableCell>
                         
                         </TableRow>
                    </TableHead>
                    <TableBody>
                         {displayProducts?.map((row) => (
                         <TableRow
                         key={row?._id}
                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                         >
                         <TableCell component="th" scope="row">
                              {row?.title}
                         </TableCell>
                         <TableCell align="right"> $ {row?.price}</TableCell>
                         <TableCell align="center">
                         <Button
                         
                         sx={{color:'#252525'}}
                          variant="text"
                          >
                          <i className="fas fa-pencil-alt"></i>
                          </Button> 
                          </TableCell>
                         
                         
                         </TableRow>
                         ))}
                    </TableBody>
                    </Table>
          </TableContainer>
         </Container>
     );
};

export default ManageProducts;