import { createContext } from "react";
import { AuthContextType } from "./IAuthContextType";

// Criação do contexto de autenticação
export const AuthContext = createContext<AuthContextType>({
    user: null, // Inicialmente não há usuário logado
    Signed: false, // Inicialmente não está autenticado
    SignIn: async () => {}, // Função de login vazia inicialmente
    signOut: async () => {}
});