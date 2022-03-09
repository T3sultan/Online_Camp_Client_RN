import React, { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//1.creating our auth content

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const a = 5;
  return <AuthContext.Provider value={{ a }}>{children}</AuthContext.Provider>;
};
