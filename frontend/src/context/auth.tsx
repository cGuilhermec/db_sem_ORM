import React, { useEffect, useState } from "react";
import { api } from "../api/api";
import { User } from "../interfaces/IUser";
import { AuthContextProps } from "../interfaces/IAuthContextProps";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../interfaces/IAuthContext";
import { SignInProps } from "../interfaces/ISignInProps";

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadingStoreData = () => {
      const storageUser = localStorage.getItem("@Auth:user");
      const storageToken = localStorage.getItem("@Auth:token");
      const storageRole = localStorage.getItem("@Auth:role");
      // console.log(storageToken, storageUser, storageRole);
      if (storageToken && storageUser && storageRole) {
        try {
          const userObject: User = JSON.parse(storageUser);
          setUser(userObject);
        } catch (error) {
          console.error("Erro ao analisar dados do usuário:", error);
          // Adicione um tratamento de erro adequado aqui, como exibir uma mensagem para o usuário
        }
      }
    };

    loadingStoreData();
  }, []);

  const SignIn = async ({ email, password }: SignInProps): Promise<void> => {
    console.log("Função SignIn sendo chamada...");
    try {
      console.log("Fazendo requisição para login...");
      const response = await api.post("/login", {
        email,
        password,
      });

      const { token, user, role } = response.data;

      // console.log(userRole);

      if (response.data.error) {
        alert(response.data.error);
      } else {
        setUser(response.data.user);
        // console.log(response);

        // Salva o token e os dados do usuário no localStorage
        localStorage.setItem("@Auth:token", token);
        localStorage.setItem("@Auth:role", role);
        localStorage.setItem("@Auth:user", JSON.stringify(user));
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      console.log("Erro capturado durante o login:", error);
    }
  };

  const signOut = () => {
    localStorage.clear();
    setUser(null);

    return <Navigate to="/" />;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        Signed: !!user,
        SignIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
