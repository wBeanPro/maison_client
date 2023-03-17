import React from 'react';
import ContactFeatures from '../ContactFeatures/ContactFeatures';
import EmailContact from '../EmailContact/EmailContact';
import Featurs from '../Featurs/Featurs';
import HeroCarosel from '../HeroCarousel/HeroCarosel';
import MidBanner from '../MidBanner/MidBanner';
import Reviews from '../Reviews/Reviews';
import Shop from '../Shop/Shop';


const Home = () => {
     return (
          <div>
               <HeroCarosel/>
               <Featurs/>
               <Shop/>
               <MidBanner/>
               <ContactFeatures/>
               <Reviews/>
               <EmailContact/>
               
               
          </div>
     );
};

export default Home;