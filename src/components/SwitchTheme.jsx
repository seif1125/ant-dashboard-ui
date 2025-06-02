import React from 'react';
import { Switch } from 'antd';
import { useTheme } from '../context/ThemeContext';

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

export default SwitchTheme;
