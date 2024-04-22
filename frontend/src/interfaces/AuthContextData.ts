import { SignInProps } from "./ISignInProps";
import { User } from "./IUser";

export interface AuthContextData {
    user: User | null;
    singIn: ({email, password}: SignInProps) => Promise<void>;
    signOut: () => void;
};