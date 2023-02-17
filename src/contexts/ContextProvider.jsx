import { createContext, useContext, useState, useEffect } from "react";

export const StoreContext = createContext({});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("USER")) || null
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("ACCESS_TOKEN")) || null
  );

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  const setAuthorizationToken = ({ authUser, authToken }) => {
    if (authToken && authUser) {
      setUser(authUser);
      setToken(authToken);
      localStorage.setItem("ACCESS_TOKEN", JSON.stringify(authToken));
      localStorage.setItem("USER", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("USER");
    }
  };

  const logOut = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER");
  };

  return (
    <StoreContext.Provider
      value={{
        user,
        token,
        setAuthorizationToken,
        isAuthenticated,
        logOut,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStateContext = () => useContext(StoreContext);
