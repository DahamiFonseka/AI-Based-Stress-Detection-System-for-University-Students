import React, { useEffect, useState } from 'react';
import { BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import './statistics.css';

const COLORS = ['#ff4d4d', '#82ca9d']; // Colors for stressed and non-stressed

const Statistics = () => {
  const [criticalStressCases, setCriticalStressCases] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [stressLevelDistribution, setStressLevelDistribution] = useState([]);

  const fetchDataFromFirebase = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'combinedData'));
      const records = snapshot.docs.map(doc => doc.data());

      // Filter critical stress cases
      const criticalCases = records.filter(record => record.state === 'stressed');
      setCriticalStressCases(criticalCases.map(caseData => ({
        id: caseData.student_id,
        time: caseData.timestamp?.toDate().toLocaleString(),
        details: `High stress identified in student ${caseData.student_id}.`,
      })));

      // Calculate stress level distribution
      const totalStressed = records.filter(record => record.state === 'stressed').length;
      const totalNotStressed = records.filter(record => record.state === 'not stressed').length;
      setStressLevelDistribution([
        { name: 'Stressed', value: totalStressed },
        { name: 'Not Stressed', value: totalNotStressed },
      ]);

      // Prepare monthly data (example logic assuming timestamp exists)
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const monthlyCounts = months.map(month => ({
        name: month,
        stressed: 0,
        notStressed: 0,
      }));
      records.forEach(record => {
        const timestamp = record.timestamp?.toDate();
        if (timestamp) {
          const monthIndex = timestamp.getMonth();
          if (record.state === 'stressed') {
            monthlyCounts[monthIndex].stressed += 1;
          } else if (record.state === 'not stressed') {
            monthlyCounts[monthIndex].notStressed += 1;
          }
        }
      });
      setMonthlyData(monthlyCounts);
    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
    }
  };

  useEffect(() => {
    fetchDataFromFirebase();
  }, []);

  return (
    <div className="statistics-container">
      <h1>Stress Detection Statistics</h1>

      <div className="chart-section">
        <h2>Identified Critical Stress Cases</h2>
        <ul className="critical-cases-list">
          {criticalStressCases.map((caseData) => (
            <li key={caseData.id} className="critical-case-item">
              <span><strong>ID:</strong> {caseData.id}</span>
              <span><strong>Time:</strong> {caseData.time}</span>
              <span><strong>Details:</strong> {caseData.details}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="chart-section">
        <h2>Monthly Stress Overview</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="stressed" fill={COLORS[0]} name="Stressed Students" />
            <Bar dataKey="notStressed" fill={COLORS[1]} name="Not Stressed Students" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section">
        <h2>Stress Level Distribution</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie data={stressLevelDistribution} cx="50%" cy="50%" outerRadius={150} fill="#8884d8" dataKey="value" label>
              {stressLevelDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section">
        <h2>Trend of High Stress Levels Over Time</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="stressed" stroke="#ff4d4d" activeDot={{ r: 8 }} name="High Stress Levels" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
