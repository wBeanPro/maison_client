import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import Aos from "aos";
import "aos/dist/aos.css";


const Reviews = () => {

     
     const [reviews, setReviews] = useState([])

     useEffect( ()=>{
          fetch(`https://fierce-fortress-23524.herokuapp.com/reviews`)
          .then(res => res.json())
          .then(data => setReviews(data))

     },[])

     useEffect(()=>{
          Aos.init({duration: 3000})
        },[])

     return (
          <Container  data-aos="fade-bottom"  sx={{marginTop:'140px', marginBottom:'60px'}}>
          <Typography sx={{textAlign:'center', color:'#252525', fontWeight:'500', marginTop:'100px', marginBottom:'60'}} variant="h4">
               User Reviews
          </Typography>
                <Grid sx={{pt:5}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
               {
                    reviews?.map(userReview => <Review
                    key={userReview._id}
                    userReview={userReview}
                    />)
               }
          </Grid>
          </Container>
     );
};

export default Reviews;