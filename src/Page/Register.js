import React, { useState } from 'react';
import './Register.css';
import { FaUser, FaLock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginRegister = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    return (
        <div className ={`wrapper${action}`}>
            <div className="form-box login">
                <form action = "">
                    <h1> Registration </h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                        <FaEnvelope className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="phone" placeholder='Phone' required />
                        <FaPhoneAlt className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type = "checkbox"></input>I agree to the terms & conditions </label>
                    </div>
                    <button type="submit">Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href = "#" onClick={registerLink}><Link to="/login">Login</Link></a></p>
                    </div>
                </form>
            </div>
    </div>

    );
};

export default LoginRegister;
