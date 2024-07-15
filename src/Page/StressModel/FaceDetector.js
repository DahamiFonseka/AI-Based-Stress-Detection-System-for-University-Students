import React, { useState, useRef, useEffect } from 'react';
import './FaceDetector.css';
import Webcam from 'react-webcam';
import axios from 'axios';

const FaceDetector = () => {
  const [prediction, setPrediction] = useState('');
  const [isCapturing, setIsCapturing] = useState(false);
  const webcamRef = useRef(null);
  const intervalRef = useRef(null);

  const sendImageForPrediction = async (imageData) => {
    try {
      const base64String = imageData.replace("data:image/jpeg;base64,", "");
      const response = await axios.post('http://localhost:5000/predict', {
        image: base64String,
      });
      setPrediction(response.data);
    } catch (error) {
      console.error('Error sending image:', error);
    }
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    sendImageForPrediction(imageSrc);
  };

  const startCapture = () => {
    setIsCapturing(true);
    intervalRef.current = setInterval(() => {
      capture();
    }, 1000); // Capture a frame every second
  };

  const stopCapture = () => {
    setIsCapturing(false);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); // Clean up interval on component unmount
  }, []);

  return (
    <div className="wrapper">
      {isCapturing && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="webcam"
        />
      )}
      <div className="buttons">
        {!isCapturing ? (
          <button onClick={startCapture} className="btn capture-btn">Start</button>
        ) : (
          <button onClick={stopCapture} className="btn capture-btn">Stop</button>
        )}
      </div>
      {prediction && (
        <div className="prediction">
          <p>Predicted State: {prediction[0]?.state}</p>
          <p>Predicted Emotion: {prediction[0]?.label}</p>
        </div>
      )}
    </div>
  );
};

export default FaceDetector;
