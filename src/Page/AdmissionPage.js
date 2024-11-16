import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdmissionPage = () => {
  const [admissionNo, setAdmissionNo] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (admissionNo) {
      navigate(`/StressModel/FaceDetector?admissionNo=${admissionNo}`);
    } else {
      alert("Please enter your admission number.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Stress Detection Model</h1>
      <p>Please enter your admission number to proceed:</p>
      <input
        type="text"
        placeholder="Admission Number"
        value={admissionNo}
        onChange={(e) => setAdmissionNo(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleStart}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Start
      </button>
    </div>
  );
};

export default AdmissionPage;
