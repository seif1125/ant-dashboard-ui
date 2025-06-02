
// AuthContext.jsx
import  { createContext, useState, useContext } from 'react';

const AuthContext = createContext();
 const AuthProvider = ({ children }) => { 

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const login = (username,password) => {

        if (username==='seif' && password==='123456') {
        setUser({username,password});
        setIsAuthenticated(true);}
        else{
          
            setError('❌ Invalid credentials.\nTry username: seif, password: 123456');
        }
    };
    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
    };
    const clearError = () => {
        setError('');
    }
    const showError = () => { 
       return error
    }
    const getUser = () => {
        return user;
    }
    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, getUser,error, clearError, showError }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=(()=> useContext(AuthContext));
export { AuthProvider, useAuth };
