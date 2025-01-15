# AI-Based Stress Detection System

This project leverages artificial intelligence (AI) to detect stress levels among university students through facial expression analysis. By employing convolutional neural networks (CNNs) and advanced image processing techniques, the system provides a non-intrusive solution for real-time stress monitoring. This application is ideal for educational institutions aiming to enhance student well-being.

---

### Acknowledgments

This project includes code from the following repository:

- [face_recognition by Adam Geitgey](https://github.com/ageitgey/face_recognition), licensed under the MIT License. Copyright (c) 2021, Adam Geitgey.



## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [System Architecture](#system-architecture)
- [Installation Guide](#installation-guide)
- [Usage Instructions](#usage-instructions)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

Stress among university students has become a pressing issue. Traditional stress detection methods often rely on self-reporting, which can be inaccurate and cumbersome. This AI-based system overcomes these challenges by using facial recognition and emotion classification to monitor stress levels continuously and accurately.

---

## Features

- **Real-Time Detection**: Analyzes facial expressions captured through a webcam.
- **Emotion Classification**: Categorizes emotions like happy, sad, angry, neutral, etc., to determine stress levels.
- **Student Identification**: Matches detected faces with a preloaded database of student IDs.
- **Scalability**: Can be deployed in multiple environments, such as educational institutions and corporate settings.

---

## Technologies Used

### Frontend:
- React
- HTML/CSS
- Webcam Integration

### Backend:
- Flask
- TensorFlow
- Keras
- OpenCV
- face-recognition Library

### Database:
- Firebase (for user data and stress record storage)

### Machine Learning:
- TensorFlow
- Keras
- NumPy
- scikit-learn

---

## System Architecture

1. **Frontend**:
   - Captures images from the webcam.
   - Sends image data to the backend for processing.

2. **Backend**:
   - Processes image data for face detection.
   - Uses a CNN model to predict emotions.
   - Classifies emotions into stressed or not stressed categories.

3. **Database**:
   - Stores user data and stress detection records.
   - Maintains known face encodings and student IDs.

---

## Installation Guide

### Prerequisites

- Python 3.8+
- Node.js
- Virtual Environment (`venv`)
- Git

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-stress-detection.git
   cd ai-stress-detection
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Run the backend server:
   ```bash
   python app.py
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

### Model Files

Ensure `stressdetector.json` and `stressdetectorV1.h5` are in the backend directory for loading the trained model.

---

## Usage Instructions

1. Start the Flask backend server.
2. Run the React frontend application.
3. Open the web application in your browser (typically `http://localhost:3000`).
4. Use the webcam to capture your image.
5. The system will process the image and classify your stress level as "stressed" or "not stressed."

---

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request with your changes. For major changes, open an issue first to discuss your proposal.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

