import React from 'react';
import './Dashboard.css';
import { FaHistory, FaChartBar, FaDownload } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      
      <div className="dashboard-section">
        <div className="card">
          <FaHistory className="icon" />
          <h2>History</h2>
          <p>View your activity history and log details.</p>
          <button>View History</button>
        </div>

        <div className="card">
          <FaChartBar className="icon" />
          <h2>Statistics</h2>
          <p>Check out your performance statistics and metrics.</p>
          <button>View Statistics</button>
        </div>

        <div className="card">
          <FaDownload className="icon" />
          <h2>Download Report</h2>
          <p>Download your activity reports in PDF format.</p>
          <button>Download Report</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
