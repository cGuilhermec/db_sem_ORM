import { useState, useRef, useEffect, FormEvent, useContext } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../interfaces/IAuthContext";
import RegisterEditUser from "../../../pages/RegisterEditUser";

export default function Perfil() {
  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const [nome, setNome] = useState("Usuário");
  const [perfilPhoto, setPerfilPhoto] = useState(defaultPhoto);
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/"); // Redirecionar para a página de login após o logout
  };

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
              <Link to="/register">Meu Perfil</Link>
              <img src={configuration_white} alt="" className="btnconf_white" />
              <img src={configuration} alt="" className="btnconf" />
            </button>
          </a>

          <a href="#">
            <button onClick={handleSignOut} className="sairbtn">
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
