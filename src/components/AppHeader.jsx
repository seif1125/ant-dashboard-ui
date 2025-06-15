
import { Layout, theme as antdTheme } from 'antd';
import { useAuth } from '../context/AuthContext';
import SwitchTheme from './SwitchTheme';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = ({ collapsed = true }) => {
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const { token } = antdTheme.useToken();

  return (
    <Header
      style={{
        backgroundColor: token.colorBgContainer,
        color: token.colorText,
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {collapsed && (
        <img onClick={() => navigate('/')} src="./media/logo.png" alt="logo" width={50} style={{ height: 'auto',cursor:'pointer' }} />
      )}
      <h2>
        <span style={{ color: 'red' }}>Welcome {getUser()?.username || 'Guest'}</span> to AntDashboard
      </h2>
      <SwitchTheme />
    </Header>
  );
};

export default AppHeader;
