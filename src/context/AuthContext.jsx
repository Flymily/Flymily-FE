import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authRequest } from '../services/AuthService';

const AuthContext = createContext(null);   // ✅ sin “!!”

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem('auth')),
  );
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(Boolean(localStorage.getItem('auth')));
  }, []);

  const login = async (user, pass) => {
    try {
      await authRequest(user, pass);
      setIsAuthenticated(true);
      navigate('/admin');
    } catch {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);