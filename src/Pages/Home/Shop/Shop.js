import React, { useEffect, useState } from 'react';
import './Shop.css';
import Aos from "aos";
import "aos/dist/aos.css";
import SingleShop from '../SingleShop/SingleShop';


const Shop = () => {

     const [products, setProducts] = useState([])

     useEffect(()=>{
          fetch(`https://fierce-fortress-23524.herokuapp.com/products`)
          .then(res => res.json())
          .then(data => setProducts(data))
     },[])

     useEffect(()=>{
          Aos.init({duration: 2000})
        },[])
     
     return (
          <>
              <div className="container product-area">
               <div data-aos="fade-bottom" className="product-section">
                    <h3>HAPPY PRODUCTS</h3>
                    <p>Choice your Favorite Products</p>
               </div>

               <div className="row">
                {
                    products.map(product => <SingleShop 
                         key={product._id}
                         product={product}
                    />)    
                }    
               </div>
             
              </div>
              
          </>
     );
};

export default Shop;