import { useState, useEffect } from "react";
import { api } from "../api/api";
import { User } from "../interfaces/IUser";

const useAllUsers = (userId: string) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("@Auth:token");
        const response = await api.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    };

    fetchUsers();
  }, [userId]); // Executar novamente quando userId mudar

  return users;
};

export default useAllUsers;
