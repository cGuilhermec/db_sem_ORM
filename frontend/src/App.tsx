// import { AuthProvider } from "./context/auth";
import React from "react";
import { AppRouter } from "./routes/AppRouter";

export default function App() {
  return (
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
}