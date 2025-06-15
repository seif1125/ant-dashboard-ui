import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', sales: 2400 },
  { name: 'Feb', sales: 1398 },
  { name: 'Mar', sales: 9800 },
  { name: 'Apr', sales: 3908 },
];

const SalesChart = () => (
  <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
    <h2 style={{ textAlign: 'center', fontSize: '1.5rem' }}>📈 Users Sales</h2>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#f00" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default SalesChart;
