import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/firebase.js';
import './history.css';

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'combinedData'));
        let fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() });
        });

        // Filter undefined records and limit to 50
        fetchedData = fetchedData.filter(
          (record) => record.label !== undefined && record.state !== undefined
        );
        fetchedData = fetchedData.slice(0, 50);

        setHistoryData(fetchedData);
      } catch (error) {
        console.error('Error fetching history data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistoryData();
  }, []);

  // Delete record from Firestore
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'combinedData', id));
      setHistoryData((prevData) => prevData.filter((record) => record.id !== id));
      console.log(`Record with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="history-container">
      <h1>History Page</h1>
      <div className="history-table-container">
        <table className="history-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Timestamp</th>
              <th>State</th>
              <th>Label</th>
              <th>Delete Record</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map((record) => (
              <tr key={record.id}>
                <td>{record.student_id}</td>
                <td>{new Date(record.timestamp.toDate()).toLocaleString()}</td>
                <td>{record.state}</td>
                <td>{record.label}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(record.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
