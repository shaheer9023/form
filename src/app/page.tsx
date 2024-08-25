"use client";
import React from 'react';  
import ContactForm from './form/ContactForm'; // Import the ContactForm component  

const Home: React.FC = () => {  
    return (  
        <div className="container">  
            <ContactForm />  
        </div>  
    );  
};  

export default Home;