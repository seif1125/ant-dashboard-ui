import { useState } from 'react';
import { Layout, Menu, theme as antdTheme, Grid } from 'antd';
import {
  DashboardOutlined,
  LineChartOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import AnnualChart from '../components/AnnualChart';
import SalesChart from '../components/SalesChart';
import OverallPieChart from '../components/OverallPieChart';

const { Sider, Content } = Layout;
const { useBreakpoint } = Grid;

const Dashboard = () => {
  const { logout } = useAuth();
  const { theme } = useTheme();
  const { token } = antdTheme.useToken();
  const screens = useBreakpoint();

  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuKey, setSelectedMenuKey] = useState('1');

  const handleMenuClick = (e) => {
    setSelectedMenuKey(e.key);
  };

  return (
    <Layout style={{ minHeight: '100vh', background: token.colorBgLayout }}>
  <Sider
  theme={theme}
  collapsible
  collapsed={collapsed}
  onCollapse={(val) => setCollapsed(val)}
  collapsedWidth={0}
  breakpoint="lg"
  style={{
    backgroundColor: token.colorBgContainer,
    ...(screens.xs && !collapsed
      ? {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1000,
        }
      : {
          position: 'relative',
        }),
  }}
>
  <div
    style={{
      padding: '7px',
      fontSize: '18px',
      display: 'flex',
      alignItems: 'center',
      color: token.colorText,
      backgroundColor: token.colorBgContainer,
      marginBottom: '20px',
    }}
  >
    {!collapsed && <span style={{ marginLeft: '8px' }}>AntDashboard</span>}
  </div>

  <Menu
    mode="inline"
    selectedKeys={[selectedMenuKey]}
    onClick={(e) => {
      handleMenuClick(e);
      if (screens.xs) setCollapsed(true); // auto-close after tap
    }}
    theme={theme}
    style={{
      marginTop: '20px',
      backgroundColor: token.colorBgContainer,
    }}
  >
    <Menu.Item key="1" icon={<DashboardOutlined />}>Overview</Menu.Item>
    <Menu.Item key="2" icon={<LineChartOutlined />}>Sales Analysis</Menu.Item>
    <Menu.Item key="3" icon={<BarChartOutlined />}>User Trends</Menu.Item>
    <Menu.Item key="4" icon={<LogoutOutlined />} onClick={logout} style={{ color: 'red' }}>
      Logout
    </Menu.Item>
  </Menu>
</Sider>



      <Layout>
        <Content
          style={{
            margin: '16px',
            padding: 16,
            background: token.colorBgContainer,
            color: token.colorText,
            overflowY: 'auto',
            minHeight: '100vh',
          }}
        >
          {selectedMenuKey === '1' && <OverallPieChart />}
          {selectedMenuKey === '2' && <SalesChart />}
          {selectedMenuKey === '3' && <AnnualChart />}
        </Content>
      </Layout>
      {screens.xs && !collapsed && (
  <div
    onClick={() => setCollapsed(true)}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.3)',
      zIndex: 999,
    }}
  />
)}
    </Layout>
  );
};

export default Dashboard;
