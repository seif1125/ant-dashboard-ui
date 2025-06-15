import React, { useContext,useEffect} from 'react';
export const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('theme');
  const [theme, setTheme] = React.useState(storedTheme||'light');
 useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);


  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme=()=>useContext(ThemeContext)