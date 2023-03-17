import React from 'react';

const Contact = ({contact}) => {
      const {img, title, text} = contact ||{};

     return (
          <div className="col-lg-3 col-md-6 col-6">
               <div className="row g-0 d-flex align-items-center">
               <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
               </div>
               <div className="col-md-8">
                    <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <p className="card-text"><small className="text-muted">{text}</small></p>
                    </div>
               </div>
               </div>
          </div>
     );
};

export default Contact;