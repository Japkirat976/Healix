import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    const savedAuth = localStorage.getItem("healixAuth");

    return savedAuth
      ? JSON.parse(savedAuth)
      : {
          isAuthenticated: false,
          username: "",
          email: ""
        };
  });

  useEffect(() => {
    localStorage.setItem(
      "healixAuth",
      JSON.stringify(authData)
    );
  }, [authData]);

  const login = (userData) => {
    setAuthData({
      isAuthenticated: true,
      username: userData.username,
      email: userData.email
    });
  };

  const logout = () => {
    setAuthData({
      isAuthenticated: false,
      username: "",
      email: ""
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authData,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};