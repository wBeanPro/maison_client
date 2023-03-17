import React from 'react';
import Featurs from '../Featurs/Featurs';
import HeroCarosel from '../HeroCarousel/HeroCarosel';
import Shop from '../Shop/Shop';


const Home = () => {
     return (
          <div>
               <HeroCarosel/>
               <Featurs/>
               <Shop/>
          </div>
     );
};

export default Home;