import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', Salary: 40000, Staff: 10 },
  { month: 'Feb', Salary: 38000, Staff: 8 },
  { month: 'Mar', Salary: 45000, Staff: 12 }
];

function SalaryVsStaffGraph() {
  return (
    <div>
      <h2>Salary vs Staff</h2>
      <LineChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Salary" stroke="#00e676" />
        <Line type="monotone" dataKey="Staff" stroke="#2196f3" />
      </LineChart>
    </div>
  );
}

export default SalaryVsStaffGraph;
