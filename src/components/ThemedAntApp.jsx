import React from 'react';
import { ConfigProvider, Layout, theme as antdTheme } from 'antd';
import { useTheme } from '../context/ThemeContext';
import AppRoutes from './AppRoutes';
import AppHeader from './AppHeader';

const ThemedAntApp = () => {
  const { theme } = useTheme();

  const algorithm = theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm;

  return (
    <ConfigProvider
      theme={{
        algorithm,
        token: {
          colorPrimary: theme === 'dark' ? '#555' : '#111',
          colorText: theme === 'dark' ? '#fff' : '#000',
          colorBgBase: theme === 'dark' ? '#141414' : '#fff',
          colorBgContainer: theme === 'dark' ? '#000' : '#eee',
          colorBgLayout: theme === 'dark' ? '#333' : '#fff',
          borderRadius: 6,
        },
      }}
    >
      <ThemedLayout />
    </ConfigProvider>
  );
};

const ThemedLayout = () => {
  const { token } = antdTheme.useToken();

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: token.colorBgLayout }}>
      <AppHeader />
      <AppRoutes />
    </Layout>
  );
};

export default ThemedAntApp;
