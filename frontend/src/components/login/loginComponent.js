import React, {Component, useState } from 'react';

// Import de libs de react.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from "react-router-dom";

// Import de CSS.
import '../../components/login/login.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

const LoginComponent = (props) => {
  return (
    <form action="" id="loginForm" className={`${(props.showLogin === false) ? "nodisplay" : "showdisplay animadoDireitaParaEsquerda"}`}>
      <h3 className="text-center noselect">Login</h3>
      <div className="input-group form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="Email" aria-label="Email" />
        <label className="noselect" htmlFor="floatingInput">Email</label>
      </div>
      <div className="input-group form-floating text-center">
        <input type="password" className="form-control" id="floatingInput" placeholder="Senha" aria-label="Senha" />
        <label className="noselect" htmlFor="floatingInput">Senha</label>
      </div>
      <div className="btn-group">
        <Link to={{ pathname: "/dashboard/" }} replace><button type="button" className="btn" id="btnSubmit">Login</button></Link>
      </div>
    </form>
  );
}
export default LoginComponent;