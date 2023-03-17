import React, { useEffect } from 'react';
import MapArea from '../MapArea/MapArea';
import './EmailContact.css';
import Aos from "aos";
import "aos/dist/aos.css";

const EmailContact = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
      },[])
    
     return (
          <div data-aos="fade-right" className="mapbox-email">
              <div className="container my5 pt-5">
                   <div className="row mt-5">
                        <div className="col-lg-6 col-md-6 col-12">
                        <MapArea/> 
                        </div>
                        <div className=" col-lg-6 col-md-6 col-12">
                        <h4 className="contact-text">CONTACT WITH US</h4>
                        <form id="contact-form" action="https://formspree.io/f/xjvlvjnb" method="POST" >
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" name="name" id="name" placeholder="Your Name*" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" name="email" id="email" placeholder="Mail*" />
                                </div>
                            </div>
                            <input type="text" name="subject" id="subject" placeholder="Subject*" />
                            <textarea name="message" id="message" cols="40" rows="8" placeholder="Type Your Message......."></textarea>
                            <button type="submit" className="default-btn submit-btn">SEND</button>
                            <p className="form-message"></p>
                        </form>
                        </div>
                   </div>
              </div> 
          </div>
     );
};

export default EmailContact;