
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";
import LogotipoLogin from "../../assets/imagens/Logotipos/Financer-cash-LOGOTIPO-LOGIN.png";

function Login() {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    function acessarSistema() {
        if (
            usuario === "admin@financeiro.com" &&
            senha === "123456"
        ) {
            navigate("/dashboard");
        } else {
            alert("Usuário ou senha inválidos!");
        }
    }

    return (
        <div className="container-general-login">
            <div className="container-login">
                <div className="login">
                    <img
                        src={LogotipoLogin}
                        alt="Logotipo do sistema"
                        className="logotipo-login"
                    />

                    <form
                        onSubmit={(event) => {
                            event.preventDefault();
                            acessarSistema();
                        }}
                    >
                        <label htmlFor="usuario">
                            <span>Usuário</span>
                            <input
                                id="usuario"
                                type="text"
                                placeholder="Digite seu usuário"
                                value={usuario}
                                onChange={(event) =>
                                    setUsuario(event.target.value)
                                }
                            />
                        </label>

                        <label htmlFor="senha">
                            <span>Senha</span>
                            <input
                                id="senha"
                                type="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(event) =>
                                    setSenha(event.target.value)
                                }
                            />
                        </label>

                        <input
                            type="submit"
                            value="Entrar"
                            id="btn-entrar"
                        />

                        <p>Esqueceu a senha?</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
