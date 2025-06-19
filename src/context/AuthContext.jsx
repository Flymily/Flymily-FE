import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginRequest } from '../services/AuthService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

const login = async (username, password) => {
  try {
    const userData = await loginRequest(username, password);
    setIsAuthenticated(true);
    setUser(userData);
    navigate('/admin');
  } catch (error) {
    alert('Usuario o contraseña incorrectos');
  }
};

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);