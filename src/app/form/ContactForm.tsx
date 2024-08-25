"use client";
import React, { useState } from 'react';  

const ContactForm: React.FC = () => {  
    const [name, setName] = useState('');  
    const [email, setEmail] = useState('');  
    const [website, setWebsite] = useState('');  
    const [message, setMessage] = useState('');  

    const handleSubmit = (e: React.FormEvent) => {  
        e.preventDefault();  
        // Form submit hone par data ko alert karna (yahan aap isse kisi API par send kar sakte hain ya detail page par redirect kar sakte hain)  
        alert(`Name: ${name}\nEmail: ${email}\nWebsite: ${website}\nMessage: ${message}`);  
    };  

    return (  
        <form onSubmit={handleSubmit} className="form">  
            <h1 className="heading">GET in touch</h1>  
            <label className="label">Tell me your name:</label>  
            <input  
                type="text"  
                value={name}  
                onChange={(e) => setName(e.target.value)}  
                placeholder="Enter your name"  
                className="input"  
                required  
            />  
            <input  
                type="email"  
                value={email}  
                onChange={(e) => setEmail(e.target.value)}  
                placeholder="Enter your email"  
                className="input"  
                required  
            />  
            <input  
                type="text"  
                value={website}  
                onChange={(e) => setWebsite(e.target.value)}  
                placeholder="Enter website"  
                className="input"  
            />  
            <textarea  
                value={message}  
                onChange={(e) => setMessage(e.target.value)}  
                placeholder="Enter message"  
                className="textarea"  
                required  
            ></textarea>  
            <button type="submit" className="submit-button">Submit</button>  
        </form>  
    );  
};  

export default ContactForm;