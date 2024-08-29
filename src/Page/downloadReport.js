import React from 'react';
import './downloadReport.css';

const historyData = [
  { id: '20APC4636', time: '2024-08-20 14:30:00', details: 'Activity details for record 20APC4636' },
  { id: '20APC4000', time: '2024-08-21 09:45:00', details: 'Activity details for record 20APC4000' },
  { id: '20APC4905', time: '2024-08-22 18:15:00', details: 'Activity details for record 20APC4905' },
  { id: '20CIS5784', time: '2024-08-23 11:00:00', details: 'Activity details for record 20CIS5784' },
  { id: '20SSP4628', time: '2024-08-24 20:20:00', details: 'Activity details for record 20SSP4628' },
];

const DownloadReport = () => {

  const generateReport = (record) => {
    const reportContent = `
      Report for Record ID: ${record.id}\n
      Recorded Time: ${record.time}\n
      Details: ${record.details}\n
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `report_${record.id}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="downloadreport-container">
      <h1>Download Reports</h1>
      <ul className="report-list">
        {historyData.map((record) => (
          <li key={record.id} className="report-item">
            <span>Record ID: {record.id}</span>
            <button onClick={() => generateReport(record)}>Download Report</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadReport;
