import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import { PrivateRoute } from "./privateRoutes";
import { Home } from "../pages/Home";
import { Teste } from "../pages/Teste";


export const AppRouter = () => {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />;
                <Route path="/teste" element={<Teste />} />;
                {/* só vai deixar entrar na conta se o user estiver logado, caso nao haja
                mais o token ele nao deixa ficar logado */}
                <Route path="/home" element={<PrivateRoute />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </Router>
        
            

    )
};