import { FormEvent, useContext, useState } from "react";
import "../styles/loginPage.css";
import { AuthContext } from "../interfaces/IAuthContext";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("teste@gmail.com");
  const [password, setPassword] = useState("123");
  const { SignIn, Signed } = useContext(AuthContext);

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    await SignIn(data);
  };

  if (Signed) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="bloco">
      <div className="bloco1">
        <div className="bloco2">
          <div className="bloco3">
            <img
              decoding="async"
              className="logoBranca"
              src="https://visionaespacial.com/wp-content/themes/VisionaEspacial/assets/img/logo-branca-completa.svg"
            />
            <div className="boxbaixo">
              <form onSubmit={handleSignIn} className="inputbox">
                <div className="wrap-input">
                  <input
                    className={email !== "" ? "has-val" : "input"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span
                    className="focus-input"
                    data-placeholder="E-mail"
                  ></span>
                </div>
                <div className="wrap-input">
                  <input
                    className={password !== "" ? "has-val" : "input"}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span className="focus-input" data-placeholder="Senha"></span>
                </div>

                <button type="submit" className="loginbtn">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
