import React from 'react';
import './learnMore.css';

const LearnMore = () => {
  return (
    <div className="learn-more-container">
      <h1>About the Stress Detection System</h1>
      
      <section className="intro-section">
        <p>
          Our stress detection system is designed to identify stress levels in students based on input data. 
          It provides insights into the emotional well-being of students, helping in early intervention and support.
        </p>
      </section>
      
      <section className="technical-details">
        <h2>Technical Details</h2>
        <ul>
          <li><strong>Model Accuracy:</strong> 82%</li>
          <li><strong>Technology Used:</strong> TensorFlow, React, Firebase, OpenCV, Keras</li>
          <li><strong>Input Data:</strong> Real-time inputs from students</li>
          <li><strong>Classification:</strong> Binary (Stressed / Not Stressed) and Optional Mood Classification</li>
          <li><strong>Deployment:</strong> scalable architecture</li>
        </ul>
      </section>
      
      <section className="methodology-section">
        <h2>Methodology</h2>
        <p>
          The system uses a machine learning model trained on stress data set from Keggle which include over 10000 records. It takes real-time inputs from users 
          and processes them to predict stress levels. The model employs statistical analysis techniques to ensure reliable results.
        </p>
      </section>
      
      <section className="future-plans-section">
        <h2>Future Plans</h2>
        <p>
          - Introduce multi-level stress classification (Low, Moderate, High)<br />
          - Add sentiment analysis for richer insights<br />
          - Implement real-time alert systems for critical stress cases<br />
          - Integrate additional data sources such as biometric sensors
        </p>
      </section>
    </div>
  );
};

export default LearnMore;
