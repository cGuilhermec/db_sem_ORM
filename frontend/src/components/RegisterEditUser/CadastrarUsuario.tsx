import { FormEvent, useState } from "react";
import useCadastroUsuario from "../../context/useCadastroUsuario";
import ErrorMessage from "../Error/Error"; // Importe o componente ErrorMessage

const CadastrarUsuario = () => {
  const userId = localStorage.getItem("@Auth:userId");
  const { nameRef, emailRef, roleRef, handleSubmit, alertMessage } =
    useCadastroUsuario(userId || "");
  const [showError, setShowError] = useState(false); // Estado para controlar a exibição do alerta

  return (
    <form className="container-data-1">
      {alertMessage && showError && (
        <ErrorMessage
          message={alertMessage}
          onClose={() => setShowError(false)}
        />
      )}
      <div className="inputs">
        <label htmlFor="" className="labels">
          Nome:{" "}
        </label>
        <input ref={nameRef} type="text" placeholder="Nome e Sobrenome" />
      </div>

      <div className="inputs">
        <label htmlFor="" className="labels">
          E-mail:{" "}
        </label>
        <input
          ref={emailRef}
          type="text"
          placeholder="usuario@visiona.com.br"
        />
      </div>

      <div className="inputs">
        <label htmlFor="" className="labels">
          Função:{" "}
        </label>
        <input ref={roleRef} type="text" />
      </div>

      <div className="btnsubmit">
        <button
          onClick={async (e: FormEvent) => {
            e.preventDefault();
            setShowError(true); // Mostrar o alerta de erro antes de enviar o formulário
            await handleSubmit(); // Executar a função handleSubmit
          }}
        >
          Confirmar
        </button>
      </div>
    </form>
  );
};

export default CadastrarUsuario;
