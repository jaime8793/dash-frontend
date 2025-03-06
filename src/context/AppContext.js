"use client"

import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [state, setState] = useState("some value");
  const [userData, setUserData] = useState(() => {
    // Load userData from localStorage on initialization
    const savedUser = localStorage.getItem("userData");
    return savedUser ? JSON.parse(savedUser) : undefined;
  });

  const [allProducts, setAllProducts] = useState({});

  // Save userData to localStorage whenever it changes
  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        userData,
        setUserData,
        allProducts,
        setAllProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
