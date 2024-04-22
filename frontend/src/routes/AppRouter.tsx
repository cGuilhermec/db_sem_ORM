import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import PrivateRoute from "./privateRoutes";
import { Home } from "../pages/Home";
import { AuthProvider } from "../context/auth";
// import { Teste } from "../pages/Teste";
// import { isAuthenticated } from "../context/auth";


export const AppRouter = () => {
    return (

        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />} />;
                    <PrivateRoute path="/home" element={<Home />} />                
                </Routes>
            </AuthProvider>
        </Router>       

    );
};