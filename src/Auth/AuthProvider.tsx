import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true,
  refreshAuth: async () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    console.log('Checking authentication...');
    try {
      await axios.get('http://localhost:3000/admins/check_auth', {
        withCredentials: true,
      });
      setIsAuthenticated(true);
    } catch (error) {
      // If check_auth fails, try refresh_token
      try {
        await axios.post(
          'http://localhost:3000/admins/refresh_token',
          {},
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
      } catch (refreshError) {
        setIsAuthenticated(false);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const refreshAuth = async () => {
    setLoading(true);
    await checkAuth();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, refreshAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
