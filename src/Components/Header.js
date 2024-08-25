import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton'; // Adjust the path according to your file structure
import { useAuth } from '../contexts/authContext'; // Adjust the path according to your file structure

const Header = () => {
  const { userLoggedIn } = useAuth();

  return (
    <header>
      <div className="logo">STRESS DETECTION SYSTEM</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li> */}
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          {userLoggedIn && <li><SignOutButton /></li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
