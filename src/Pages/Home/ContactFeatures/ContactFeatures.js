import React, { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';
import './ContactFeatures.css';
import Aos from "aos";
import "aos/dist/aos.css";

const ContactFeatures = () => {
     const [contacts, setContact] = useState([])

     useEffect( ()=>{
          fetch('/contact.json')
          .then(res => res.json())
          .then(data => setContact(data))
     },[])

     useEffect(()=>{
          Aos.init({duration: 2000})
        },[])

     return (
          <div data-aos="fade-bottom" className="contact-box my-5 ">
               <div className="row">
                    {
                        contacts.map(contact => <Contact
                         key={contact.id}
                         contact={contact}
                        />)    
                    }
               </div>
          </div>
     );
};

export default ContactFeatures;