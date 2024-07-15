import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>
        Welcome to the <br /> AI-Based Stress Detection System
      </h1>
      <Link to="/login"><button>Get Started</button></Link>
      <button>Learn More</button>
    </div>
  );
};

export default Home;
