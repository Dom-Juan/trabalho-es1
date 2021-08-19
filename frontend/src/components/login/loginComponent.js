import React, {Component, useState } from 'react';
import { useHistory } from 'react-router';
// Import de libs de react.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from "react-router-dom";

// Import de CSS.
import '../../components/login/login.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

// Import de API..
import api from "../../api";
import { login, loginError } from "../../auth";

const LoginComponent = (props) => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [erro, setErro] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  let history = useHistory();

  async function auth(email, password) {
    try {
      await api.post("/session", {
        email: email,
        senha: password,
      }).then((response) => {
        setLoginStatus(true)
      })
      //login(response.data.token);
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setLoginStatus(false);
        setErro("Erro de request no sistema, digitou os dados corretos ?");
      } else if (error.response.status === 404) {
        setLoginStatus(false);
        setErro("Não foi encontrado nos sistemas!");
      } else if (error.response.status === 401) {
        setLoginStatus(false);
        setErro("Conexão não autenticada pelo navegador, verifique se é HTTPS");
      } else if (error.response.status === 405) {
        setLoginStatus(false);
        setErro("Método não permitido...");
      } else if (error.response.status === 406) {
        setLoginStatus(false);
        setErro("Not Acceptable");
      } else if (error.response.status === 408) {
        setLoginStatus(false);
        setErro("Conexão com o server caiu... timeout");
      } else if (error.response.status === 413) {
        setLoginStatus(false);
        setErro("Informações adicionadas são excedem a carga do servidor.");
      } else if (error.response.status === 429) {
        setLoginStatus(false);
        setErro("Muitas tentativas de login realizadas em um periodo curto de tempo, espere um pouco e tente novamente...");
      } else {
        setLoginStatus(false);
        setErro("Erro genérico.");
      }
      this.setState({ loginStatus: false});
      loginError(null);
    }
  }

  function handleChangeEmail (event) {
    setEmail(event.target.value)
  };

  function handleChangePassword (event) {
    setPassword(event.target.value)
  };

  function handleSubmit (event) {
    event.preventDefault();
    auth(email, password);
  };

  return (
    <form action="" id="loginForm" className={`${(props.showLogin === false) ? "nodisplay" : "showdisplay animadoDireitaParaEsquerda"}`} onSubmit={handleSubmit}>
      <h3 className="text-center noselect">Login</h3>
      <div className="input-group form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="Email" aria-label="Email" onChange={handleChangeEmail}/>
        <label className="noselect" htmlFor="floatingInput">Email</label>
      </div>
      <div className="input-group form-floating text-center">
        <input type="password" className="form-control" id="floatingInput" placeholder="Senha" aria-label="Senha" onChange={handleChangePassword}/>
        <label className="noselect" htmlFor="floatingInput">Senha</label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" id="btnSubmit" type="submit">Login</button>
      </div>
    </form>
  );
}
export default LoginComponent;