import { useContext } from "react";
import { AuthContext } from "../interfaces/IAuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {

     //Precisamos de uma variavel que identifica quando o user ta logado ou nao
     const { Signed } = useContext(AuthContext);

    return Signed ? <Outlet /> : <Navigate to='/' />;
}