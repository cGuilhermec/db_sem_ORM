import { useRef, useState } from "react";
import { api } from "../api/api";
import "../styles/error.css";

const useCadastroUsuario = (userId: string) => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const roleRef = useRef<HTMLInputElement | null>(null);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handleSubmit = async () => {
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
        console.log("Entrou para cadastrar!");
        const token = localStorage.getItem("@Auth:token");
        const response = await api.post(
          `/new-user/${userId}`,
          {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            password: "123",
            role: roleRef.current?.value,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          console.log("Usuário cadastrado com sucesso");
          alert("Usuário cadastrado com sucesso!");
          console.log(response.data.message);
        } else if (response.status === 409) {
          alert("Erro: " + response.data.message);
        } else {
          console.error("Erro:", response.data.message);
          alert("Erro ao cadastrar usuário: " + response.data.message);
        }
        return await response;
      }
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.message;
        console.error("Erro:", errorMessage);
        setAlertMessage(errorMessage);
      }
    }
  };

  return { nameRef, emailRef, roleRef, handleSubmit, alertMessage };
};

export default useCadastroUsuario;
