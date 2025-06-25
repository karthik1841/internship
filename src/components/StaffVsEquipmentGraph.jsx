import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Staff: 40, Equipment: 24 },
  { name: 'Feb', Staff: 30, Equipment: 13 },
  { name: 'Mar', Staff: 20, Equipment: 98 }
];

function StaffVsEquipmentGraph() {
  return (
    <div>
      <h2>Staff vs Equipment</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Staff" fill="#00bcd4" />
        <Bar dataKey="Equipment" fill="#ff9800" />
      </BarChart>
    </div>
  );
}

export default StaffVsEquipmentGraph;
