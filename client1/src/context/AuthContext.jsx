import React, { createContext, useEffect, useContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import AuthPeople from '../api/userApi'; // ваш API для получения токена

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (newToken) => {
    const decode = jwtDecode(newToken);
    setToken(newToken);
    setIsAuthenticated(true);
    setCurrentUserId(decode.sub);
  };

  const logout = async () => {
    setToken(null);
    setIsAuthenticated(false);
    setCurrentUserId(null);
  };

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const savedToken = await AuthPeople.getAccessToken();
        console.log('Restored token:', savedToken);
        if (savedToken) {
          const decode = jwtDecode(savedToken);
          setToken(savedToken);
          setIsAuthenticated(true);
          setCurrentUserId(decode.sub);
        } else {
          setToken(null);
          setIsAuthenticated(false);
          setCurrentUserId(null);
        }
      } catch (error) {
        console.error('Ошибка восстановления сессии:', error);
        setToken(null);
        setIsAuthenticated(false);
        setCurrentUserId(null);
      } finally {
        setLoading(false);
      }
    };
    restoreSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        currentUserId,
        token,
        loading,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
