import React, { createContext, useEffect, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import AuthPeople from '../api/userApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const login = async (token) => {
    const decode = jwtDecode(token);

    setIsAuthenticated(true);
    setCurrentUserId(decode.sub);
  };

  const logout = async () => {
    setIsAuthenticated(false);
    setCurrentUserId(null);
  };

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const token = await AuthPeople.getAccessToken();
        if (token) {
          const decode = jwtDecode(token);
          setIsAuthenticated(true);
          setCurrentUserId(decode.sub);
        } else {
          setIsAuthenticated(false);
          setCurrentUserId(null);
        }
      } catch (error) {
        console.error(`Ошибка восстановления сессии: `, error);
        setIsAuthenticated(false);
        setCurrentUserId(null);
      }
    };

    restoreSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, currentUserId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
