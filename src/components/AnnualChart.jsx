import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const mockData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 200 },
  { name: 'May', users: 278 },
  { name: 'Jun', users: 189 },
];

const AnnualChart = () => (
  <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
    <h2 style={{ textAlign: 'center', fontSize: '1.5rem' }}>👥 Users Enrollment</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={mockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#f00" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default AnnualChart;
