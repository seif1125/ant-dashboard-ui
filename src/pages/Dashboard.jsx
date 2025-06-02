import { useState } from 'react';
import { Layout, Menu,  theme as antdTheme } from 'antd';
import {
  DashboardOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import Charts from '../components/Charts';


const { Sider, Content } = Layout;



const Dashboard = () => {
  const { logout, getUser } = useAuth();
  const { theme } = useTheme();
  const { token } = antdTheme.useToken();

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
        onCollapse={() => setCollapsed(!collapsed)}
        collapsedWidth={0}
        breakpoint="lg"
        style={{
          marginBottom: '25px',
          color: token.colorText,
          backgroundColor: token.colorBgContainer,
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
          onClick={handleMenuClick}
          theme={theme} 
          style={{marginTop:'20px',backgroundColor: token.colorBgContainer}}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Overview
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<LogoutOutlined />}
            onClick={logout}
            style={{ color: 'red' }}
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: token.colorBgContainer,
            color: token.colorText,
          }}
        >
          {selectedMenuKey === '1' && (
            <Charts />
          )}
          {selectedMenuKey === '2' && (
            <p>📈 This is the Stats section with charts.</p>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
