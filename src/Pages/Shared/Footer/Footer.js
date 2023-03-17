import React, { useEffect } from 'react';
import './Footer.css';
import footerImage from '../../../Images/footerBottom.jpg';
import logoFooter from '../../../Images/logotop.jpg';
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {

     const footerBanner  = {
          background : `url(${footerImage})`,
          backgroundRepeat :'no-repeat',
          backgroundPosition : 'center',
          width:'100%',
          height:'100%',
         
         
     }

     useEffect(()=>{
          Aos.init({duration: 2000})
        },[])

     return (
          <div data-aos="fade-bottom" className="footerArea" style={footerBanner}>
               <div className="row-wrapper">
               <div className="container mb-5">
                    <div className="row text-center mb-5 ">
                         <div className="col-lg-4 col-md-6 col-12">
                         <div>
                             <h6 className="bef_cls">CONTACT</h6>     
                         </div>
                         <div className="Info-area">
                              <p className="info-text">maison@business.com</p>
                              <p className="info-text">(+01) 009 779 222</p>
                              <p className="info-text">FAX: +1 (2) 345 6789</p>
                         </div>
                         <div>
                              <p className="location-info">PO Box CT16122 Collins Street West, Victoria 8007, Australia.</p>
                         </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-12">
                         <div>
                              <img src={logoFooter} alt="" /> 
                              <h5 className="text-logo">MAISON COMMERCIAL</h5>    
                         </div>
                         <div>
                              <div className="social-area">
                              <i className="fab active-style fa-linkedin-in"></i>
                              <i className="fab icon-social fa-twitter"></i>
                              <i className="fab icon-social fa-facebook"></i>
                              <i className="fab icon-social fa-reddit"></i>
                              </div>
                         </div>
                         <div>
                              <p className="we-text">We are Sunrise team - a team of enthusiastic business service holder</p>
                         </div>
                         </div>
                         <div className="col-lg-4 col-md-6 col-12">
                         <div>
                            <p className="bef_cls">STAY IN TOUCH</p>  
                         </div>
                         <div className="text-center">
                         <div>
                         <input className="IntBox" type="email" name="" id="" />
                         <br />
                         <button className="btn-Int" type="submit">SUBSCRIBE</button>
                         </div>
                         </div>
                         </div>
                    </div>
                    <div className="text-center mt-5">
                         <p className="copy-text">© Copyright | Privacy </p>
                    </div>
               </div>
               </div>
          </div>
     );
};

export default Footer;