
import '../Page/AddImagePage.css';
import React, { useState } from 'react';

const AddImage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [studentId, setStudentId] = useState('');
  const [statusMessage, setStatusMessage] = useState('');


  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
  };


  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  // Convert the image to base64 and submit to the backend
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!imageFile || !studentId) {
      setStatusMessage("Please select an image and enter a student ID.");
      return;
    }

    try {
      // Convert image to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result.split(',')[1]; 

       
        const response = await fetch('http://localhost:5001/addImage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            image: base64Image,
            student_id: studentId
          })
        });

        const result = await response.json();
        if (response.ok) {
          setStatusMessage('Image added successfully!');
        } else {
          setStatusMessage(`Error: ${result.error}`);
        }
      };

      reader.readAsDataURL(imageFile);
    } catch (error) {
      setStatusMessage('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="add-image-container">
      <h2>Upload New Student Image</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Student ID:
            <input
              type="text"
              value={studentId}
              onChange={handleStudentIdChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Select Image:
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileChange}
              required
            />
          </label>
          <p>Only upload .jpg , .jpeg , .png files. Max: 2MB</p>
        </div>
        <button type="submit">Upload</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default AddImage;
