import { User } from "./IUser";

export interface AuthContextValue {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
};