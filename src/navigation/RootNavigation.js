import React from "react";
import { AuthProvider } from "../context/AuthContext";
import MainNavigation from "./../navigation/MainNavigation";

export default function RootNavigation() {
  return (
    <AuthProvider>
      <MainNavigation />
    </AuthProvider>
  );
}
