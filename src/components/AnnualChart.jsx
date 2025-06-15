
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const mockData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 500 },
  { name: 'Apr', users: 200 },
  { name: 'May', users: 278 },
  { name: 'Jun', users: 189 },
];

const AnnualChart = () => {


  return (
    <div style={{ padding: 24, borderRadius: 8 }}>
      <h2>👥Users enrollment</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={mockData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"  />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill={'#f00'} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnnualChart;
