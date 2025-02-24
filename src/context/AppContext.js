"use client";
import { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create the provider component
export function AppContextProvider({ children }) {
  const [state, setState] = useState("some value");
  const [userData, setUserData] = useState(undefined);
  const [allProducts, setAllProducts] = useState(undefined);

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        userData,
        setUserData,
        allProducts, setAllProducts
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
