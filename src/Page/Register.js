import React, { useState } from 'react';
import './Register.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';

const Register = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    const [action, setAction] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const registerLink = () => {
        setAction(' active');
    };

    const loginLink = () => {
        setAction('');
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        setErrorMessage('');

        if (password.length < 6) {
            setErrorMessage('Password should be at least 6 characters.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        if (!isRegistering) {
            setIsRegistering(true);
            try {
                await doCreateUserWithEmailAndPassword(email, password);
                navigate('/login');  // Navigate to login after successful registration
            } catch (error) {
                setErrorMessage(error.message);
                setIsRegistering(false);
            }
        }
    };

    return (
        <div className={`wrapper${action}`}>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}

            <div className="form-box login">
                <form onSubmit={onSubmit} className="space-y-4">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder='Enter email'
                            autoComplete='email'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder='Password'
                            autoComplete='new-password'
                            required
                            disabled={isRegistering}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaLock className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            autoComplete='off'
                            required
                            disabled={isRegistering}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <FaLock className='icon' />
                    </div>

                    {errorMessage && (
                        <span className='text-red-600 font-bold'>{errorMessage}</span>
                    )}

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> I agree to the terms & conditions
                        </label>
                    </div>
                    <button type="submit" disabled={isRegistering}>
                        {isRegistering ? 'Registering...' : 'Register'}
                    </button>
                    <div className="register-link">
                        <p>
                            Already have an account? <a href="#" onClick={loginLink}><Link to="/login">Login</Link></a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
