import React, { createContext, useState } from "react";
import { api } from "../api/api";
import { User } from "../interfaces/IUser";
import { AuthContextProps } from "../interfaces/IAuthContextProps";
// import { SignInProps } from "../interfaces/ISignInProps";
// import { AuthContext } from "../interfaces/IAuthContext";
import { Navigate } from "react-router-dom";
import { AuthContextValue } from "../interfaces/IAuthContextValue";


// export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    
//     const [user, setUser] = useState<User | null>(null);

//     useEffect(() => {
//         const loadingStoreData = async () => {
//             const storageUser = localStorage.getItem("@Auth:user");
//             const storageToken = localStorage.getItem("@Auth:token");

//             if (storageToken && storageUser) {
//                 const userObject: User = JSON.parse(storageUser);
//                 setUser(userObject);
//             }
//         };

//         loadingStoreData();
//     }, []);

//     const SignIn = async ({ email, password }: SignInProps): Promise<void> => {
//         console.log("Função SignIn sendo chamada...");
//         try {
//             console.log("Fazendo requisição para login...");
//             const response = await api.post("/login", {
//                 email,
//                 password
//             });

//             const { token } = response.data;

//             if(response.data.error){
//                 alert(response.data.error);
//             } else {
//                 setUser(response.data.user);
//                 console.log(response)
//                 api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//                 // Salva o token e os dados do usuário no localStorage
//                 localStorage.setItem("@Auth:token", token);
//                 localStorage.setItem("@Auth:user", JSON.stringify(response.data.user));
//             };
//         } catch (error) {
//             console.error("Erro ao fazer login:", error);
//             console.log("Erro capturado durante o login:", error);
//         };
//     };

//     const signOut = () => {
//         // const navigate = useNavigate()
//         localStorage.clear();
//         setUser(null);
//         // navigate('/');

//         return <Navigate to="/" />
//     };

//     return (
//         <AuthContext.Provider 
//             value={{
//                 user,
//                 Signed: !!user,
//                 SignIn,
//                 signOut
//             }}
//         >
//             { children }
//         </AuthContext.Provider>
//     );

// };

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  signIn: async () => {},
  signOut: () => {},
});

export const AuthProvider: React.FC<AuthContextProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    const signIn = async(email: string, password: string): Promise<void> => {
    
        try {
            const response = await api.post('/login', {email, password});
            console.log(response.data.token);
            return response.data.token;
        } catch (error) {
            throw new Error('Credenciais inválidas');
        };
    };

    const signOut = () => {
        // Remova o token do localStorage
        localStorage.removeItem('token');
        // Limpe o estado do usuário
        setUser(null);
        // Redirecione para a página de login
        return <Navigate to="/login" />;
    };

    const authContextValue: AuthContextValue = {
        user,
        signIn,
        signOut,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );

};

