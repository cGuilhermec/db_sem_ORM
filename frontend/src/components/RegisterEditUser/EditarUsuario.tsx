import React, { useState, useEffect, useRef } from "react";
// @ts-ignore
import dropdown from "../../images/registerEditUser/dropdown.png";
// @ts-ignore
import dropdown_white from "../../images/registerEditUser/dropdown_white.png";
import useAllUsers from "../../context/getAllusers";
import { User } from "../../interfaces/IUser";

export default function EditarUsuario() {
  // Estado para controlar se o dropdown está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);
  // Estado para os itens do dropdown
  // Estado para o usuário selecionado
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  // Estados para os campos de alteração
  const [nomeInput, setNomeInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [roleInput, setRoleInput] = useState("");
  // Referência para o elemento do botão dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userId = localStorage.getItem("@Auth:userId");
  const users = useAllUsers(userId || "");

  // Efeito para adicionar ouvinte de eventos para fechar o dropdown quando clicado fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Função para lidar com a seleção de um usuário
  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setNomeInput(user.name);
    setEmailInput(user.email);
    setRoleInput(user.role);
    setIsOpen(false); // Fecha o dropdown após selecionar um usuário
  };

  // Função para lidar com o envio das alterações
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedUser) {
      const updatedUsers = users.map((user) =>
        user === selectedUser
          ? { ...user, nome: nomeInput, email: emailInput, role: roleInput }
          : user
      );
      // setUsers(updatedUsers);
      // Atualiza o usuário selecionado com as informações alteradas
      setSelectedUser({
        ...selectedUser,
        name: nomeInput,
        email: emailInput,
        role: roleInput,
      });

      // Limpa os inputs
      setNomeInput("");
      setEmailInput("");
      setRoleInput("");
    }
  };

  console.log(users);

  return (
    <div ref={dropdownRef} className="container-data-2 ">
      <div className="container-dropdown-user">
        <div className="dropdown-edit-user">
          <button onClick={() => setIsOpen(!isOpen)} className="btn-dropdown1">
            Selecione o Usuário
            <img src={dropdown} alt="" className="seta-dropdown" />
            <img src={dropdown_white} alt="" className="seta-dropdown_white" />
          </button>
          {/* Lista de itens do dropdown, renderizada apenas se o dropdown estiver aberto */}
          {isOpen && (
            <div className="itens-lista1">
              <ul>
                {users.map((user, index) => (
                  <li key={index} onClick={() => handleUserSelect(user)}>
                    {user.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form-edit-user">
        <div className="inputs">
          <label htmlFor="" className="labels">
            Nome:{" "}
          </label>
          <input
            type="text"
            placeholder="Nome e Sobrenome"
            value={nomeInput}
            onChange={(e) => setNomeInput(e.target.value)}
          />
        </div>

        <div className="inputs">
          <label htmlFor="" className="labels">
            E-mail:{" "}
          </label>
          <input
            type="text"
            placeholder="usuario@visiona.com.br"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="" className="labels">
            Função:{" "}
          </label>
          <input
            type="text"
            value={roleInput}
            onChange={(e) => setRoleInput(e.target.value)}
          />
        </div>
        <div className="btnsubmit">
          <button>Confirmar</button>
        </div>
      </form>
    </div>
  );
}
