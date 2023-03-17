import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SingleShop.css';
import Aos from "aos";
import "aos/dist/aos.css";

const SingleShop = ({product}) => {
     const {_id, title, img, price} = product || {};

     useEffect(()=>{
          Aos.init({duration: 2000})
        },[])

     return (
          <div data-aos="fade-left" className="col-lg-3 col-md-3 col-6">
               <div className=" mb-4 item-card">
               <img src={img} className="card-img-top" alt="..." />
               <div className="card-body d-flex justify-content-between">
               <p className="card-text fw-bold">{title}</p>
               <p className="card-text">$ {price}</p>
               </div>
               <div className="book-section">
               <Link to={`shop/${_id}`}>
               <button className="book-btn"><i className="fas icon-shop fa-dolly"></i> BUY NOW</button>
               </Link>
               </div>
               </div>
               
          </div>
     );
};

export default SingleShop;