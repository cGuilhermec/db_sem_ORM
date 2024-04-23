// import { AuthProvider } from "./context/auth";
import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { AuthProvider } from "./context/auth";

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
