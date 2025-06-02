import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ConfigProvider, theme as antdTheme } from 'antd';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useAuth } from './context/AuthContext';

// ✅ Route protection
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// ✅ App Routes — No ThemeProvider here
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

// ✅ This component reacts to theme changes
const ThemedAntApp = () => {
  const { theme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary:theme==='dark'? '#555':'#111',
          colorText: theme === 'dark' ? '#fff' : '#000',
          colorBgBase: theme === 'dark' ? '#eee' : '#fff',        // outer layout bg
          colorBgContainer: theme === 'dark' ? '#141414' : '#fff',   // card/content
          colorBgLayout: theme === 'dark' ? '#555' : '#eee',      // optional
          borderRadius: 6,
        },
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  );
};

// ✅ Only one ThemeProvider at the root
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <ThemedAntApp />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
