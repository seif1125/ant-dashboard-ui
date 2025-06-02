// src/components/LoginForm.jsx
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import {useAuth} from '../context/AuthContext'; // ✅ Correct
import {theme as antdTheme} from 'antd'; // Import the theme module
const LoginForm = () => {
   const { token } = antdTheme.useToken();
  const {login,clearError,showError,error} = useAuth();
  const onFinish = (values) => {
    clearError()
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
        <Input onChange={clearError} prefix={<UserOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item
      style={{backkgroundColor:token.colorBgBase}} 
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
        <Button  type="primary" htmlType="submit" block>
          Log in
        </Button>
      </Form.Item>
       {error && (
      <Alert
        message="Login Error"
        description={error}
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
