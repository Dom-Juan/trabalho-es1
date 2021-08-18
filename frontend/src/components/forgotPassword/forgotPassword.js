import React, { useState } from 'react';

// Import de libs de react
import 'bootstrap/dist/css/bootstrap.min.css';

// Import de API
import api from "../../api";

// Import de CSS.
import '../login/login.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

const ForgotPsdComponent = (props) => {
  const [email, setEmail] = useState(false);
  
  async function HandleSubmit() {
    try {
      await api
      .post('/forgotPswd')
      .then(response => {

      });
    } catch (error) {

    }
  }

  function HandleEmail(e) {
    setEmail(e.target.value);
  }
  
  return (
    <form action="" id="forgotForm" className={`${(props.showForgot === false) ? "nodisplay" : "showdisplay animadoDireitaParaEsquerda"}`} onChange={HandleSubmit}>
      <h3 className="text-center noselect">Esqueceu a senha</h3>
      <div className="input-group mb-3 form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="Email" aria-label="Email" onChange={HandleEmail}/>
        <label className="noselect" htmlFor="floatingInput">Digite seu email</label>
      </div>
      <div className="btn-group">
        <button className="btnSubmit" onClick={console.log("Fazer a API de cadastro depois!")} id="btnSubmit" type="submit" >Enviar Email</button>
      </div>
    </form>
  );
}
export default ForgotPsdComponent;