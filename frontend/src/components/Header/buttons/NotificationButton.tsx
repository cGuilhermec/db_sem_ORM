// @ts-ignore
import ntfbtn from "../../../images/header/notificacao.png";
// @ts-ignore
import ntfbtn_white from "../../../images/header/notificacao_white.png";

export default function NotificationButton() {
  return (
    <button className="btnntf">
      <img src={ntfbtn} className="ntf_btn" />
      <img src={ntfbtn_white} className="ntf_btn_white" />
    </button>
  );
}
