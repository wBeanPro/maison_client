import React, { useEffect } from 'react';
import './MidBanner.css';
import ChairLogo from '../../../Images/chairBg.jpg';
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const MidBanner = () => {
    
     useEffect(()=>{
          Aos.init({duration: 2000})
        },[])
     
     return (
          <div data-aos="fade-bottom" className="mid-area">
               <div className="container">
                    <div className="row">
                         <div className="col-lg-6 col-md-6 col-12">
                         <div data-aos="fade-left" className="left-des">
                         <h1 className="sub-title">FEATURES</h1>
                         <h2 className="main-title">UP COMMING FEATURES </h2>
                         <p className="para-text">Available every days valuable products with money back guarantee just buy some products with justify</p>
                         <Link to="/"><button className="shop-btn">Features</button></Link>
                         </div>  
                         </div>
                         <div className="col-lg-6 col-md-6 col-12">
                           <img width="100%" src={ChairLogo} alt="" />  
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default MidBanner;