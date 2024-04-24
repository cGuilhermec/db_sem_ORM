import { useState, useRef, useEffect } from "react";
// import { useOutsideClick } from "../../Header/useOutsidaClick";

// @ts-ignore
import defaultPhoto from "../../../images/header/default_user.png";
// @ts-ignore
import singout from "../../../images/header/singout.png";
// @ts-ignore
import singout_white from "../../../images/header/singout_white.png";
// @ts-ignore
import configuration from "../../../images/header/configuration.png";
// @ts-ignore
import configuration_white from "../../../images/header/configuration_white.png";

export default function Perfil() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const [nome, setNome] = useState("Usuário");
  const [perfilPhoto, setPerfilPhoto] = useState(defaultPhoto);

  return (
    <div>
      <div className="menu-container">
        <button
          onClick={onClick}
          className={`perfil ${isActive ? "active" : "inactive"}`}
        >
          <div className="ft_perfil">
            <img src={perfilPhoto} alt="" />
          </div>
          <div>{nome}</div>
        </button>

        <nav
          ref={dropDownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <a href="#">
            <button className="confbtn">
              Meu Perfil
              <img src={configuration_white} alt="" className="btnconf_white" />
              <img src={configuration} alt="" className="btnconf" />
            </button>
          </a>

          <a href="#">
            <button className="sairbtn">
              Sair
              <img src={singout_white} alt="" className="btnsair_white" />
              <img src={singout} alt="" className="btnsair" />
            </button>
          </a>
        </nav>
      </div>
    </div>
  );
}
