import React, { useEffect } from 'react';
import './Featurs.css';
import chair1 from '../../../chairPro/chair1.png';
import chair2 from '../../../chairPro/chair2.png';
import chair3 from '../../../chairPro/chair3.png';
import Aos from "aos";
import "aos/dist/aos.css";

const Featurs = () => {
     useEffect(()=>{
          Aos.init({duration: 2000})
        },[])

     return (
          <div className="container my-5 py-5">
               <div className="row">
                    <div data-aos="fade-top" className="col-lg3 col-md-3 col-12 featurs">
                    <img width="100%" src={chair1} alt="" />   
                    </div>
                    <div data-aos="flip-left" className="col-lg6 col-md-6 col-12">
                    <img width="100%" src={chair2} alt="" />
                    </div>
                    <div data-aos="fade-top" className="col-lg3 col-md-3 col-12">
                    <img width="100%" src={chair3} alt="" />
                    </div>
               </div>
          </div>
     );
};

export default Featurs;