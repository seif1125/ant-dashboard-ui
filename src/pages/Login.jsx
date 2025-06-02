// src/pages/Login.jsx

import LoginForm from '../components/LoginForm.tsx';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
const Login = () => {
    const { isAuthenticated } = useAuth();

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
       
      }}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
