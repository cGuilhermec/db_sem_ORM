import { useRef, useState } from "react";
import { api } from "../api/api";
import { User } from "../interfaces/IUser";

const useUpdateUser = (id: string) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const roleRef = useRef<HTMLSelectElement | null>(null);
  const [updatedUser, setUpdatedUser] = useState<User[]>([]);

  const handleSubmits = async () => {
    try {
      if (
        !nameRef.current?.value ||
        !emailRef.current?.value ||
        !roleRef.current?.value
      ) {
        return alert("Complete todos os campos, antes de enviar");
      }
      if (
        roleRef.current?.value !== "adm" &&
        roleRef.current?.value !== "revisor" &&
        roleRef.current?.value !== "editor"
      ) {
        return alert(
          'Você precisa colocar na Função: "adm", "editor" ou "revisor". Qualquer outro nome será invalidado.'
        );
      }
      if (
        nameRef.current?.value ||
        emailRef.current?.value ||
        roleRef.current?.value
      ) {
        // console.log(
        //   `Dados do user que esta sendo atualizado: nome: ${nameRef.current?.value}, email: ${emailRef.current?.value}, role: ${roleRef.current?.value}`
        // );
        const token = localStorage.getItem("@Auth:token");
        const response = await api.post(
          `/att-user/${id}`,
          {
            name: nameRef.current?.value,
            role: roleRef.current?.value,
            email: emailRef.current?.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUpdatedUser(response.data);
        // console.log(updatedUser);
        console.log(response.data);
        if (response.status === 200) {
          alert("Usuário atualizado com sucesso!");
        } else if (response.status === 409) {
          alert("Erro: " + response.data.message);
        } else {
          console.error("Erro:", response.data.message);
          alert("Erro ao atualizar usuário: " + response.data.message);
        }
        return await response;
      }
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        console.error("Erro:", errorMessage);
        alert(errorMessage);
      }
    }
  };
  return { nameRef, emailRef, roleRef, handleSubmits, updatedUser };
};
export default useUpdateUser;
