import React, { Component, useState, useEffect, } from 'react';

// Import de libs de react.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import de Components.
import LoginComponent from '../../components/login/loginComponent';
import CadComponent from '../../components/cad/cadComponent';
import ForgotPsdComponent from '../../components/forgotPassword/forgotPassword';

// Import de API..
import api from "../../api";
import { login, loginError } from "../../auth";

// Import de CSS.
import '../../components/login/login.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showLogin: true,
      showCad: false,
      showForgot: false,
      loginStatus: false,
      erro: false,
      email: "",
      password: "",
      confirmPassword: "",
      isLoading: false
    }

    this.addLogin = this.addLogin.bind(this);
    this.addRegister = this.addRegister.bind(this);
    this.addForgotPsd = this.addForgotPsd.bind(this);
  }

  addLogin() {
    if (this.state.showLogin === true) {
      this.state.showCad === false ? this.setState({ showLogin: true, }) : this.setState({ showForgot: false, showCad: false });
    } else {
      this.setState({ showLogin: true, showForgot: false, showCad: false });
    }
  }

  addRegister() {
    if (this.state.showCad === true) {
      this.state.showLogin === false ? this.setState({ showCad: true }) : this.setState({ showLogin: false, showForgot: false });
    } else {
      this.setState({ showCad: true, showLogin: false, showForgot: false });
    }
  }

  addForgotPsd() {
    if (this.state.showForgot === true) {
      (this.state.showLogin === false || this.state.showCad === false) ? this.setState({ showForgot: true }) : this.setState({ showCad: false, showLogin: false });
    } else {
      this.setState({ showCad: false, showLogin: false, showForgot: true });
    }
  }

  render() {
    return (
      <>
        <div id="main-login">
          <div id="contain" className="container">
            <div className="login-register-wrapper animadoCimaParaBaixo">
              <div className="nav-buttons">
                <button type="button" className="btn" onClick={this.addLogin} id="toggleBtn">Login</button>
                <button type="button" className="btn" onClick={this.addRegister} id="toggleBtn">Cadastro</button>
              </div>
              <div className="form-group">
                <LoginComponent showLogin={this.state.showLogin}></LoginComponent>
                <CadComponent showCad={this.state.showCad}></CadComponent>
                <ForgotPsdComponent showForgot={this.state.showForgot}></ForgotPsdComponent>
              </div>
              <div id="forgot-panel">
                <a className="forgot-password text-center noselect" onClick={this.addForgotPsd} href="#forgot">Já possui cadastro e esqueceu a senha ?</a>
              </div>
            </div>
          </div>
          <div className="contain-title">
            <h1 className="text-center login-title noselect">Sistema - Relatório de desempenho do PPgSI</h1>
          </div>
        </div>
      </>
    );
  }
}
export default Login;