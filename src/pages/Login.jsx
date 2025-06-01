// src/pages/Login.jsx

import LoginForm from '../components/LoginForm.tsx';

const Login = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f0f2f5',
      }}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
