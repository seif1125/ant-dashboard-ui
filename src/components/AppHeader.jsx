
import { Layout, theme as antdTheme } from 'antd';
import { useAuth } from '../context/AuthContext';
import SwitchTheme from './SwitchTheme';

const { Header } = Layout;

const AppHeader = ({ collapsed = true }) => {
  const { getUser } = useAuth();
  const { token } = antdTheme.useToken();

  return (
    <Header
      style={{
        background: token.colorBgContainer,
        color: token.colorText,
        padding: '0 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {collapsed && (
        <img src="./media/logo.png" alt="logo" width={50} style={{ height: 'auto' }} />
      )}
      <h2>
        <span style={{ color: 'red' }}>Welcome {getUser()?.username || 'Guest'}</span> to AntDashboard
      </h2>
      <SwitchTheme />
    </Header>
  );
};

export default AppHeader;
