import { useContext } from "react"
import { AuthContext } from "../interfaces/IAuthContext";
import { Navigate, Outlet } from "react-router-dom";


export const PrivateRoute = () => {

    const { Signed } = useContext(AuthContext);
    console.log("PrivateRoute - Signed:", Signed);

    return Signed ? <Outlet /> : <Navigate to='/' />;

};