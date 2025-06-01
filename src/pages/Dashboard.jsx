
import React,{useState} from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  DashboardOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useAuth } from '../context/AuthContext';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const { logout,getUser } = useAuth();
 const [collapsed, setCollapsed] = useState(false);
 const [selectedMenuKey, setSelectedMenuKey] = useState('1');
  const handleMenuClick = (e) => {
    setSelectedMenuKey(e.key);
  };
  return (
    <Layout hasSider={true} style={{ minHeight: '100vh' }}>
      <Sider  collapsed={collapsed} collapsible={true} onCollapse={()=>{setCollapsed(!collapsed)}} collapsedWidth={120} theme='light' breakpoint="lg" collapsedWidth="0">
        <div style={{ color: 'black', padding: '16px', fontSize: '18px',display: 'flex', alignItems: 'center' }}>
          <img src="./media/logo.png" alt="logo" width={50} height={50} />
          <span>AntDashboard</span>
        </div>
        <Menu  theme="light" mode="inline" defaultSelectedKeys={selectedMenuKey}>
          <Menu.Item  key="1" icon={<DashboardOutlined />}>
            Overview
          </Menu.Item>
         
          <Menu.Item itemType='danger' key="3" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{
            background: '#fff',
            padding: '0 16px',
            display: 'flex',
            // justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {collapsed&&(<img src="./media/logo.png" alt="logo" width={50} height={50} />)}
          <h2><span style={{color:'red'}}>Welcome {getUser().username}</span> to AntDashboard</h2>
          {/* Theme toggle will go here */}
        </Header>

        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
      {selectedMenuKey === '1' && <p>📊 This is the Overview section.</p>}
    {selectedMenuKey === '2' && <p>📈 This is the Stats section with charts.</p>}    
  
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
