import React, { createContext, useEffect, useContext, useState } from 'react';

import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!Cookies.get('access_token')
  );

  useEffect(() => {
    const token = Cookies.get('access_token');
    setIsAuthenticated(!!token);
  }, []);

  const login = (token) => {
    Cookies.set('access_token', token, { expires: 7 }); // expires в днях
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('access_token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
