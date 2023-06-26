import { createContext, useState } from "react";
import { loginRequest, registerRequest, verifyToken } from "../api/auth";
import { useEffect } from "react";
import Cookie from "js-cookie";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const signUp = async (value) => {
    try {
      const res = await registerRequest(value);
      setIsAuthenticated(true);
      setUser(res);
    } catch (error) {
      const errorArray = Array.isArray(error.response.data.error)
      ? error.response.data.error
      : [error.response.data.error];
      setErrors(errorArray);
      setIsAuthenticated(false);
    }
  };

  const signIn = async (value) => {
    try {
      const res = await loginRequest(value);
      setIsAuthenticated(true);
      setUser(res);
    } catch (error) {
      const errorArray = Array.isArray(error.response.data.error)
      ? error.response.data.error
      : [error.response.data.error];
      setErrors(errorArray);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookie = Cookie.get();

      if (!cookie.token) {
        setIsAuthenticated(false);
        setLoading(false)
        return setUser(null);
      }

      try {
        const res = await verifyToken(cookie.token);

        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return setUser(null);
        }
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUp, signIn, errors, isAuthenticated, user, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
