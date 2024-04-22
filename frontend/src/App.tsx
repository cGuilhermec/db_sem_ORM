import { AuthProvider } from "./context/auth";
import { AppRouter } from "./routes/AppRouter";

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}