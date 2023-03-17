import React from 'react';
import Footer from '../../Shared/Footer/Footer';
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
               <Reviews/>
               
          </div>
     );
};

export default Home;