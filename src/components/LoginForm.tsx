// src/components/LoginForm.jsx
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import {useAuth} from '../context/AuthContext'; // ✅ Correct

const LoginForm = () => {
  const {login,logout,clearError,showError,error} = useAuth();
  const onFinish = (values) => {
    login(values.username, values.password);  
  };

  return (
    <Form
      name="login_form"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ maxWidth: 300 }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
      </Form.Item>
       {error && (
      <Alert
        message="Login Error"
        description={showError}
        type="error"
        showIcon
        closable
        onClose={clearError}
      />
    )}
    </Form>

   
  );
};

export default LoginForm;
