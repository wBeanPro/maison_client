import React from 'react';
import './PageNotFound.css';
import errorPage from '../../../Images/errorpage.png';

const PageNotFound = () => {
     return (
          <div className="text-center mt-5">
               <img  src={errorPage} alt="" />
          </div>
     );
};

export default PageNotFound;