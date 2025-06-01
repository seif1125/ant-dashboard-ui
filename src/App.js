import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import { AuthProvider,useAuth } from './context/AuthContext';
import Dashboard from './pages/Dashboard';

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Dashboard />: <Login />;
};

function App() {
  
  return (
    <AuthProvider> 
      <div className="App">
      <AppContent />
      </div>
    </AuthProvider>
   
  );
}

export default App;
