import React, { useState } from 'react';
import { Layout, Menu, Switch, theme as antdTheme } from 'antd';
import {
  DashboardOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const { Header, Sider, Content } = Layout;

const SwitchTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      checkedChildren="🌙"
      unCheckedChildren="☀️"
    />
  );
};

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
          <img src="./media/logo.png" alt="logo" width={50} height={37.8} />
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
            <img src="./media/logo.png" alt="logo" width={50} height={37.8} />
          )}
          <h2>
            <span style={{ color: 'red' }}>
              Welcome {getUser().username}
            </span>{' '}
            to AntDashboard
          </h2>
          <SwitchTheme />
        </Header>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: token.colorBgContainer,
            color: token.colorText,
          }}
        >
          {selectedMenuKey === '1' && (
            <p>📊 This is the Overview section.</p>
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
