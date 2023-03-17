import React, { useEffect } from 'react';
import hero1 from '../../../sliderProduct/slider1.jpg';
import hero2 from '../../../sliderProduct/slider2.jpg';
import hero3 from '../../../sliderProduct/slider3.jpg';
import './HeroCarousel.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const HeroCarosel = () => {
     useEffect(()=>{
          Aos.init({duration: 2000})
        },[])
     return (
         <div  className="carousel-Area">
              <div className="row">
              <div data-aos="fade-right" className="col-lg-6 col-md-6 col-12">
                         <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
               <div className="carousel-inner">
               <div className="carousel-item active">
                    <img src={hero1} width="90%" className="d-block" alt="..." />
               </div>
               <div className="carousel-item">
                    <img src={hero2} className="d-block w-100" alt="..." />
               </div>
               <div className="carousel-item">
                    <img src={hero3} className="d-block w-100" alt="..." />
               </div>
               </div>
               </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
               <div data-aos="fade-left" className="left-des">
                    <h1 className="sub-title">COLLECTION</h1>
                    <h1 className="main-title">NEED DAILY PRODUCTS</h1>
                    <p className="para-text">Here your's every days valuable products with money back guarantee just buy some products with justify</p>
                    <Link to="shop"><button className="shop-btn">SHOP NOW</button></Link>
               </div>
              </div>
         </div>
         </div>
     );
};

export default HeroCarosel;