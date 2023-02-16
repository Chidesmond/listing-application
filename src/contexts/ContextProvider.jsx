import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  // user: null,
  // token: null,
  // setAuthorizationToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("USER")) || null
  );
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("ACCESS_TOKEN")) || null
  );

  const isAuthenticated = !!token;

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

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setAuthorizationToken,
        isAuthenticated,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
