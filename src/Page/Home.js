import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import Header from '../Components/Header';

const Home = () => {

  return (
    <div>
      <Header />
      <div className="home">
        <h1>
          Welcome to the <br /> AI-Based Stress Detection System
        </h1>
        <Link to="/StressModel/FaceDetector"><button>Get Started</button></Link>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Home;
