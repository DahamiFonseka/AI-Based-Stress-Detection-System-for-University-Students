import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/authContext';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import Admin from './Page/Admin';
import FaceDetector from './Page/StressModel/FaceDetector';

function App() {

  const { userLoggedIn } = useAuth();

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
      
          <Routes>
            <Route path="/" element={userLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/home" element={<ProtectedRoute userLoggedIn={userLoggedIn}><Home /></ProtectedRoute>} />
            <Route path="/StressModel/FaceDetector" element={<FaceDetector />} />
          </Routes>
          </main>
          < Footer />
        </div>
    </Router>
  );
}

const ProtectedRoute = ({ userLoggedIn, children }) => {
  return userLoggedIn ? children : <Navigate to="/login" />;
};

export default App;
