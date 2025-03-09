"use client";

import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [state, setState] = useState("some value");
  const [userData, setUserData] = useState(undefined);
  const [allProducts, setAllProducts] = useState({});

  // Load userData from localStorage once the component mounts (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("userData");
      if (savedUser) {
        setUserData(JSON.parse(savedUser));
      }
    }
  }, []);

  // Save userData to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (userData) {
        localStorage.setItem("userData", JSON.stringify(userData));
      } else {
        localStorage.removeItem("userData");
      }
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
