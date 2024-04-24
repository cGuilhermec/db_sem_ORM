import "./header.css";
import HomeButton from "./buttons/HomeButton";
import NotificationButton from "./buttons/NotificationButton";

// @ts-ignore
import logo from "../../../images/Header/logo_visiona_preto.png";
import Perfil from "./buttons/Perfil";
import DarkMode from "./buttons/DarkMode";

export default function Header() {
  return (
    <header className="header">
      <div className="inicio">
        <img className="logoBranca" src={logo} />
      </div>
      <div className="final">
        <HomeButton />
        <NotificationButton />
        <DarkMode />
        <Perfil />
      </div>
    </header>
  );
}
