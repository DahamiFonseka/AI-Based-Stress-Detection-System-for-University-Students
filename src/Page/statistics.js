import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import './statistics.css';

const stressDataByMonth = [
  { name: 'Jan', stressed: 400, notStressed: 1600 },
  { name: 'Feb', stressed: 300, notStressed: 1700 },
  { name: 'Mar', stressed: 500, notStressed: 1500 },
  { name: 'Apr', stressed: 200, notStressed: 1800 },
  { name: 'May', stressed: 350, notStressed: 1650 },
  { name: 'Jun', stressed: 250, notStressed: 1750 },
  { name: 'Jul', stressed: 450, notStressed: 1550 },
];

const stressLevelDistribution = [
  { name: 'Low', value: 400 },
  { name: 'Moderate', value: 600 },
  { name: 'High', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Statistics = () => {
  return (
    <div className="statistics-container">
      <h1>Stress Detection Statistics</h1>

      <div className="chart-section">
        <h2>Monthly Stress Overview</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={stressDataByMonth} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="stressed" fill="#ff4d4d" name="Stressed Students" />
            <Bar dataKey="notStressed" fill="#82ca9d" name="Not Stressed Students" />
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
          <LineChart data={stressDataByMonth} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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