// ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [website, setWebsite] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}\nWebsite: ${website}\nMessage: ${message}`);
        // Reset form fields after submission if desired
        setName('');
        setEmail('');
        setWebsite('');
        setMessage('');
    };

    return (
        <div className="container">
            <form id="contact-form" onSubmit={handleSubmit}>
                <h1 className="heading">GET in touch</h1>
                <div className="row">
                    <div className="column left">
                        <label className="label">Tell me your name:</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="column right">
                        <label className="label">Enter your email:</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <label className="label">Enter website:</label>
                <input
                    type="text"
                    placeholder="Enter website"
                    className="input"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
                <label className="label">Enter message:</label>
                <textarea
                    placeholder="Enter message"
                    className="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <div className="button-container">
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;