import { useState } from "react";
import "../styles/registerEditUser.css";
import EditarUsuario from "../components/RegisterEditUser/EditarUsuario";
import CadastrarUsuario from "../components/RegisterEditUser/CadastrarUsuario";
// @ts-ignore
import Objects from "../images/registerEditUser/objects.png";

export default function RegisterEditUser() {
  const [activeButton, setActiveButton] = useState<"Cadastrar" | "Editar">(
    "Cadastrar"
  );

  const handleButtonClick = (buttonType: "Cadastrar" | "Editar") => {
    setActiveButton(buttonType);
  };

  return (
    <div className="body">
      <img src={Objects} alt="" className="background-image" />
      <div className="container-datas">
        <div className="container">
          <div className="btnsFuncao">
            {activeButton === "Cadastrar" && (
              <span className="frase1">Cadastro de Usuário</span>
            )}
            {activeButton === "Editar" && (
              <span className="frase2">Edição de Usuário</span>
            )}
          </div>
          <div className="container-btns">
            <button
              className={`btn1 ${activeButton === "Cadastrar" ? "active" : ""}`}
              onClick={() => handleButtonClick("Cadastrar")}
            >
              Cadastrar de Usuário
            </button>

            <button
              className={`btn1 ${activeButton === "Editar" ? "active" : ""}`}
              onClick={() => handleButtonClick("Editar")}
            >
              Editar perfil de Usuário
            </button>
          </div>
        </div>
        {activeButton === "Cadastrar" ? (
          <CadastrarUsuario />
        ) : (
          <EditarUsuario />
        )}
      </div>
    </div>
  );
}
