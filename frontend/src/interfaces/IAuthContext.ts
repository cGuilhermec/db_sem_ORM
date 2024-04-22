import { createContext } from "react";
import { AuthContextType } from "./IAuthContextType";


export const AuthContext = createContext<AuthContextType>({
    user: null, // Inicialmente não há usuário logado
    Signed: false, // Inicialmente não está autenticado
    signIn: async () => {}, // Função de login vazia inicialmente
    signOut: async () => {}
});