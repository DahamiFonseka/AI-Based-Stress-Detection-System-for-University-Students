import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">STRESS DETECTION SYSTEM</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
