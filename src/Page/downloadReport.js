import React, { useEffect, useState } from 'react';
import { db } from '../firebase/firebase.js'; // Ensure you have firebase.js configured
import { collection, getDocs } from 'firebase/firestore';
import jsPDF from 'jspdf';
import './downloadReport.css';

const DownloadReport = () => {
  const [records, setRecords] = useState([]);

  // Fetch data from Firebase
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'combinedData')); // Replace 'history' with your collection name
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecords(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Generate PDF Report
  const generatePDFReport = (record) => {
    const pdf = new jsPDF();
    pdf.setFontSize(16);
    pdf.text(`Report for Record ID: ${record.id}`, 10, 20);
    pdf.setFontSize(12);
    pdf.text(`Recorded Time: ${record.time}`, 10, 40);
    pdf.text(`Details: ${record.details}`, 10, 60);

    // Save the PDF
    pdf.save(`report_${record.id}.pdf`);
  };

  return (
    <div className="downloadreport-container">
      <h1>Download Reports</h1>
      {records.length === 0 ? (
        <p>Loading records...</p>
      ) : (
        <ul className="report-list">
          {records.map((record) => (
            <li key={record.id} className="report-item">
              <span>Record ID: {record.id}</span>
              <button onClick={() => generatePDFReport(record)}>Download Report</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DownloadReport;
