import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';

const Login = () => {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();

    const [action, setAction] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const registerLink = () => setAction(' active');
    const loginLink = () => setAction('');

    const onSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous error message

        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                navigate('/home'); // Redirect to home after successful login
            } catch (error) {
                if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                    setErrorMessage('Incorrect email or password.');
                } else {
                    setErrorMessage('Invalid email or password. Try again.');
                }
                setIsSigningIn(false); // Reset signing in state
            }
        }
    };

    return (
        <div className={`wrapper${action}`}>
            {userLoggedIn && <Navigate to={'/home'} replace={true} />}

            <div className="form-box login">
                <form onSubmit={onSubmit} className="space-y-5">
                    <h1>Login</h1>

                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Enter email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FaUser className="icon" />
                    </div>

                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaLock className="icon" />
                    </div>

                    {errorMessage && (
                        <div className="error-message">{errorMessage}</div>
                    )}

                    <div className="remember-forgot-container">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>

                    <button type="submit" disabled={isSigningIn}>
                        {isSigningIn ? 'Signing In...' : 'Sign In'}
                    </button>

                    <div className="register-link">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/register" onClick={registerLink}>
                                Register
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
