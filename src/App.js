
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, } from './context/ThemeContext';

import ThemedAntApp from './components/ThemedAntApp';






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
