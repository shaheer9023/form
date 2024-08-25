import React, { useState } from 'react';  

const ContactForm: React.FC = () => {  
    const [name, setName] = useState<string>('');  
    const [email, setEmail] = useState<string>('');  
    const [website, setWebsite] = useState<string>('');  
    const [message, setMessage] = useState<string>('');  

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  
        e.preventDefault();  
        alert(`Name: ${name}\nEmail: ${email}\nWebsite: ${website}\nMessage: ${message}`);  
        setName('');  
        setEmail('');  
        setWebsite('');  
        setMessage('');  
    };  

    return (  
        <div className="container mx-auto p-4">  
            <form id="contact-form" onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">  
                <h1 className="text-2xl font-bold mb-4">GET in touch</h1>  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">  
                    <div>  
                        <label className="block text-gray-700 text-sm font-bold mb-2">Tell me your name:</label>  
                        <input  
                            type="text"  
                            placeholder="Enter your name"  
                            className="input border rounded w-full py-2 px-3 text-gray-700"  
                            value={name}  
                            onChange={(e) => setName(e.target.value)}  
                            required  
                        />  
                    </div>  
                    <div>  
                        <label className="block text-gray-700 text-sm font-bold mb-2">Enter your email:</label>  
                        <input  
                            type="email"  
                            placeholder="Enter your email"  
                            className="input border rounded w-full py-2 px-3 text-gray-700"  
                            value={email}  
                            onChange={(e) => setEmail(e.target.value)}  
                            required  
                        />  
                    </div>  
                </div>  
                <label className="block text-gray-700 text-sm font-bold mb-2">Enter website:</label>  
                <input  
                    type="text"  
                    placeholder="Enter website"  
                    className="input border rounded w-full py-2 px-3 text-gray-700 mb-4"  
                    value={website}  
                    onChange={(e) => setWebsite(e.target.value)}  
                />  
                <label className="block text-gray-700 text-sm font-bold mb-2">Enter message:</label>  
                <textarea  
                    placeholder="Enter message"  
                    className="textarea border rounded w-full py-2 px-3 text-gray-700 mb-4"  
                    value={message}  
                    onChange={(e) => setMessage(e.target.value)}  
                    required  
                />  
                <div className="button-container">  
                    <button type="submit" className="submit-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">  
                        Submit  
                    </button>  
                </div>  
            </form>  
        </div>  
    );  
};  

export default ContactForm;  
