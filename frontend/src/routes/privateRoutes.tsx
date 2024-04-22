import React, { useContext } from "react"
import { AuthContext } from "../interfaces/IAuthContext";
import { Navigate, Outlet, Route } from "react-router-dom";
import { ProtectedRouteProps } from "../interfaces/IProtectedRouteProps";


// export const PrivateRoute = () => {

//     const { Signed } = useContext(AuthContext);
//     console.log("PrivateRoute - Signed:", Signed);

//     return Signed ? <Outlet /> : <Navigate to='/' />;

// };

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ path, element }) => {

    const token = localStorage.getItem('token');

    // Se o token estiver ausente, redireciona para a página de login
    if(!token) {
        return <Navigate to="/" replace />;
    };

    // Se o token estiver presente e o caminho da rota for "/login", redirecione para a página inicial
    if (token && path === '/login') {
        return <Navigate to="/home" replace />;
    };

    // Se o token estiver presente e o caminho da rota não for "/login", renderize o elemento da rota
    return <Route path={path} element={element} />;

};

export default ProtectedRoute;