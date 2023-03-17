import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ProductDetails.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const ProductDetails = () => {
     const {user} = useAuth()
     const {id} = useParams()

     const [singleProduct, setSingleProduct] = useState({})

     useEffect( ()=>{
         const url = `https://fierce-fortress-23524.herokuapp.com/products/${id}`
         fetch(url)
         .then( res => res.json())
         .then (data => setSingleProduct(data))
     },[])

     useEffect(()=>{
          Aos.init({duration: 2000})
        },[])

        const { register, handleSubmit } = useForm();
     const onSubmit = data =>{
           data.email = user?.email;
          
           fetch("https://fierce-fortress-23524.herokuapp.com/addOrders", {
               method: "POST",
               headers: { "content-type": "application/json" },
               body: JSON.stringify(data),
               })
               .then((res) => res.json())
               .then(result =>{
                    if(result.insertedId){
                         alert('Your Order successfully')
                    }
               })
          
          };

     return (
          <>
           <div  className="container detail-order">
                <div className="row">
                     <div data-aos="fade-right" className="col-lg-6 col-md-12 col-12">
                     <div class="card mb-3">
                    <div class="row g-0">
                    <div class="col-md-4">
                         <img width="100%" src={singleProduct?.img} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                         <div class="card-body">
                         <h5 class="card-title fw-bold mt-3">{singleProduct?.title}</h5>
                         <p class="card-text fs-3 text-secondary fw-bold">$ {singleProduct?.price}</p>
                         
                         </div>
                    </div>
                    </div>
                    </div>
                     </div>

                     <div data-aos="fade-left" className="col-lg-6 col-md-12 col-12 product-form">
                     <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={singleProduct?.title} {...register("title",  { required: true })} placeholder="Product title" />
                    <input  defaultValue={singleProduct?.price} type="number" {...register("price",  { required: true })} placeholder="Price" />

                    <input  defaultValue={singleProduct?.img} {...register("img",  { required: true })} placeholder="Image url" />
                    <input className="placebtn" type="submit"  value="Place Order"/>
                    </form>
                     </div>
                </div>
           </div>  
          </>
     );
};

export default ProductDetails;