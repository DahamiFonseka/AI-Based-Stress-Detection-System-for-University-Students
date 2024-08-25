import React from 'react';
import './history.css';

const History = () => {
  const historyData = [
    { id: '1', time: '2024-08-20 14:30:00', details: 'Activity details for record 1' },
    { id: '2', time: '2024-08-21 09:45:00', details: 'Activity details for record 2' },
    { id: '3', time: '2024-08-22 18:15:00', details: 'Activity details for record 3' },
    { id: '4', time: '2024-08-23 11:00:00', details: 'Activity details for record 4' },
    { id: '5', time: '2024-08-24 20:20:00', details: 'Activity details for record 5' },
  ];

  return (
    <div className="history-container">
      <h1>History Page</h1>
      <table className="history-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Recorded Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {historyData.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.time}</td>
              <td><button className="details-button" onClick={() => alert(record.details)}>More Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
