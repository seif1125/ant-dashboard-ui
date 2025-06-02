// src/pages/Login.jsx

import LoginForm from '../components/LoginForm.tsx';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { theme as antdTheme } from 'antd';
const Login = () => {
    const { isAuthenticated } = useAuth();
const { token } = antdTheme.useToken();
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: token.colorBgLayout // Ant Design's default light background
       
      }}
    >
      
      <LoginForm />
    </div>
  );
};

export default Login;
