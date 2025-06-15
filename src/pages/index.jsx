
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Title, Paragraph } = Typography;

const Index = () => {
  const navigate = useNavigate();
  return (
    <div     style={{
        
        padding: '40px',
  // Ensures full screen height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center',      // Center content horizontally
        textAlign: 'center',
      }}>
      <Title >Welcome to AntDashboard</Title>
      <Paragraph>
        This is a powerful and responsive dashboard template built with React and Ant Design.
        It includes authentication, theming, data visualizations, and more.
      </Paragraph>
      <Paragraph>
        Use the menu to navigate to your dashboard, analyze data trends, and explore visual insights.
      </Paragraph>
          <Button type="primary" size="large" onClick={() => navigate('/dashboard')} style={{ marginTop: 20 }}>
        Go to Dashboard
      </Button>
    </div>
  );
};

export default Index;