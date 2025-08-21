import React, { createContext, useEffect, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!Cookies.get('access_token')
  );
  const [currentUserId, setCurrentUserId] = useState(null);

  useEffect(() => {
    const token = Cookies.get('access_token');
    setIsAuthenticated(!!token);

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setCurrentUserId(decoded.sub); // assuming 'sub' contains user id
      } catch (error) {
        console.error('Error decoding token', error);
        setCurrentUserId(null);
      }
    } else {
      setCurrentUserId(null);
    }
  }, []);

  const login = (token) => {
    Cookies.set('access_token', token, { expires: 7 });
    setIsAuthenticated(true);

    try {
      const decoded = jwtDecode(token);
      setCurrentUserId(decoded.sub);
    } catch (error) {
      console.error('Error decoding token', error);
      setCurrentUserId(null);
    }
  };

  const logout = () => {
    Cookies.remove('access_token');
    setIsAuthenticated(false);
    setCurrentUserId(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, currentUserId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
