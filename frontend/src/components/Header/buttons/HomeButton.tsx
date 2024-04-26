// @ts-ignore
import homebtn from "../../../images/header/home.png";
// @ts-ignore
import homebtn_white from "../../../images/header/home_white.png";

export default function HomeButton() {
  return (
    <button className="btnhome">
      <img src={homebtn} className="home_btn" />
      <img src={homebtn_white} className="home_btn_white" />
    </button>
  );
}
