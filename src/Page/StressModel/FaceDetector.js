import React, { useState, useRef, useEffect } from 'react';
import './FaceDetector.css';
import Webcam from 'react-webcam';
import axios from 'axios';

const FaceDetector = () => {
  const [detections, setDetections] = useState([]);
  const [prediction, setPrediction] = useState('');
  const [isCapturing, setIsCapturing] = useState(false);
  const webcamRef = useRef(null);
  const intervalRef = useRef(null);

  const sendImageForDetection = async (imageData) => {
    try {
        const base64String = imageData.replace("data:image/jpeg;base64,", "");
        const response = await axios.post('http://localhost:5001/detect', {
            image: base64String,
        });
        setDetections(response.data);
    } catch (error) {
        console.error('Error sending image for detection:', error);
    }
};


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
    sendImageForDetection(imageSrc);
    sendImageForPrediction(imageSrc);
  };

  const startCapture = () => {
    setIsCapturing(true);
    intervalRef.current = setInterval(() => {
      capture();
    }, 1000); 
  };

  const stopCapture = () => {
    setIsCapturing(false);
    clearInterval(intervalRef.current);
    window.location.reload();
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current); 
  }, []);

  useEffect(() => {
    console.log(detections);
  }, [detections]);

  return (
    <div className="wrapper">
      <div className="video-container" style={{ position: 'relative', width: '100%', height: 'auto' }}>
        {isCapturing && (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam webcam-large"
            style={{ width: '100%' }}
          />
        )}
        {detections.map((det, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: `${det.bbox[0]}px`,
              top: `${det.bbox[1]}px`,
              width: `${det.bbox[2] - det.bbox[0]}px`,
              height: `${det.bbox[3] - det.bbox[1]}px`,
              border: '2px solid green',
              backgroundColor: 'rgba(0, 255, 0, 0.3)',
              color: 'white',
              fontSize: '16px',
              textAlign: 'center',
            }}
          >
            {det.student_id}
          </div>
        ))}
      </div>
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
