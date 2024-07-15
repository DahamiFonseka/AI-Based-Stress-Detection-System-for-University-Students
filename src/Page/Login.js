import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
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
                    <h1> Login </h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type = "checkbox"></input>Remember me </label>
                        <a href = "#">Forgot password? </a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href = "#" onClick={registerLink}><Link to="/register">Register</Link></a></p>
                        <br></br>
                        <p>Are you an admin? <a href = "#" onClick={registerLink}><Link to="/admin">Admin Login</Link></a></p>
                    </div>
                </form>
            </div>

        

    </div>

    );
};

export default LoginRegister;
