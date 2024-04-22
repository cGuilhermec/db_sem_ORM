import { SignInProps } from "./ISignInProps";
import { User } from "./IUser";

// Definição do tipo do contexto
export interface AuthContextType {
    user: User | null; 
    Signed: boolean; 
    SignIn: ({ email, password }: SignInProps) => Promise<void>;
    signOut: () => {};
};