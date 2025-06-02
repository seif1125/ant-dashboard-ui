
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { theme as antdTheme } from 'antd';

const mockData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 200 },
  { name: 'May', users: 278 },
  { name: 'Jun', users: 189 },
];

const Stats = () => {
  const { token } = antdTheme.useToken();

  return (
    <div style={{ background: token.colorBgContainer, padding: 24, borderRadius: 8 }}>
      <h2 style={{ color: token.colorText }}>📈 Analytics Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke={token.colorText} />
          <YAxis stroke={token.colorText} />
          <Tooltip />
          <Bar dataKey="users" fill={token.colorPrimary} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Stats;
