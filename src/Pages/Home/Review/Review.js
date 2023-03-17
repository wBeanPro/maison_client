import { Grid, Paper , Typography} from '@mui/material';
import React from 'react';

const Review = ({userReview}) => {
     
     const {name, review} = userReview || {};

     return (
          <Grid sx={{mb:8}} item xs={12} sm={12} md={4}>
              <Paper sx={{py:3, px:5, borderRadius:"30px", backgroundColor:'#F5F5F5'}} elevation={3}>
                    <Typography variant="h5"  gutterBottom>
                       {name}  
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                       {review}  
                    </Typography>

              </Paper>
          </Grid>
     );
};

export default Review;