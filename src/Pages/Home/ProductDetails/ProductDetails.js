import React from 'react';
import { useParams } from 'react-router';
import './ProductDetails.css';

const ProductDetails = () => {
     const {id} = useParams()
     return (
          <div>
           <div className="container">
                <h1>This is product Id {id}</h1>
           </div>  
          </div>
     );
};

export default ProductDetails;