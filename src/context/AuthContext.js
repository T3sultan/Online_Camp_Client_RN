import React, { createContext, useReducer, useMemo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//1.creating our auth content
export const AuthContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
        isSignOut: false,
      };
    case "SIGN_OUT":
      return {
        userToken: null,
        isLoading: false,
        isSignOut: true,
      };
    default:
      break;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isSignOut: false,
    userToken: null,
  });
  const authContext = useMemo(() => ({
    restoreToken: token => {
      try {
        dispatch({ type: "RESTORE_TOKEN", token: token });
      } catch (err) {
        console.log(err);
      }
    },
    signIn: async token => {
      try {
        dispatch({ type: "SIGN_IN", token });
        await AsyncStorage.setItem("userToken", token);
      } catch (err) {
        console.log(err);
      }
    },
    register: async token => {
      try {
        dispatch({ type: "SIGN_IN", token });
        await AsyncStorage.setItem("userToken", token);
      } catch (err) {}
    },
    signOut: async () => {
      dispatch({ type: "SIGN_OUT" });
      await AsyncStorage.removeItem("userToken");
    },
  }));
  return (
    <AuthContext.Provider value={{ authContext, state }}>
      {children}
    </AuthContext.Provider>
  );
};
