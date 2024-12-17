import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { FaHistory, FaChartBar, FaDownload } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleHistoryClick = () => {
    navigate('/history');
  };

  const handleStatisticsClick = () => {
    navigate('/statistics');
  };

  const handleDownloadReportClick = () => {
    navigate('/downloadReport');
  };

  const handleAddImageClick = () => {
    navigate('/add-image');
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="dashboard-section">
        <div className="card">
          <FaHistory className="icon" />
          <h2>History</h2>
          <p>View your activity history and log details.</p>
          <div className="button-container">
            <button onClick={handleHistoryClick}>View History</button>
          </div>
        </div>

        <div className="card">
          <FaChartBar className="icon" />
          <h2>Statistics</h2>
          <p>Check out your performance statistics and metrics.</p>
          <div className="button-container">
            <button onClick={handleStatisticsClick}>View Statistics</button>
          </div>
        </div>

        <div className="card">
          <FaDownload className="icon" />
          <h2>Download Report</h2>
          <p>Download your activity reports in PDF format.</p>
          <div className="button-container">
            <button onClick={handleDownloadReportClick}>Download Report</button>
          </div>
        </div>
      </div>

      <div className="add-image-section">
        <button onClick={handleAddImageClick} className="add-image-button">
          Add Image
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
