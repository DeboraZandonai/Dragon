import React, { createContext, useState, ReactNode } from 'react';

const defaultAuthValue = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
};

export const AuthContext = createContext(defaultAuthValue);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
