import React, { useState } from 'react';

// Import de libs de react
import 'bootstrap/dist/css/bootstrap.min.css';

// Import de API
import api from "../../api";

// Import de CSS.
import '../login/login.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

const CadComponent = (props) => {
  const [nome, setNome] = useState(false);
  const [usuario, setUsuario] = useState(false);
  const [email, setEmail] = useState(false);
  const [senha, setSenha] = useState(false);
  const [confirmeSenha, setConfirmeSenha] = useState(false);
  const [nUSP, setNUSP] = useState(false);

  async function HandleSubmit() {
    try {
      if(senha === confirmeSenha) {
        await api
        .post("/cadastro", {nome, usuario, email, senha, nUSP})
        .then(response => {
  
        });
      } else {
        alert("Confirme sua senha!!!!");
      }
    } catch(error) {
      console.log(error.res);
    }
  }

  function HandleNome(e) {
    setNome(e.target.value);
  }

  function HandleUsuario(e) {
    setUsuario(e.target.value);
  }

  function HandleEmail(e) {
    setEmail(e.target.value));
  }

  function HandleSenha(e) {
    setSenha(e.target.value);
  }

  function HandleConfirmeSenha(e) {
    setConfirmeSenha(e.target.value);
  }

  function HandleNUSP(e) {
    setNUSP(e.target.value);
  }

  return (
    <form action="" id="registerForm" className={`${(props.showCad === false) ? "nodisplay" : "showdisplay animadoDireitaParaEsquerda"}`} onSubmit={HandleSubmit}>
        <h3 className="text-center noselect">Cadastro</h3>
        <div className="input-group form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Usuário" aria-label="Usuário" onChange={HandleUsuario}/>
          <label className="noselect" htmlFor="floatingInput">Usuário</label>
        </div>
        <div className="input-group form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Número USP" aria-label="Número USP" onChange={HandleNUSP}/>
          <label className="noselect" htmlFor="floatingInput">Número USP</label>
        </div>
        <div className="input-group form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="Email" aria-label="Email" onChange={HandleEmail}/>
          <label className="noselect" htmlFor="floatingInput">Email</label>
        </div>
        <div className="input-group form-floating">
          <input type="password" className="form-control" id="floatingInput" placeholder="Senha" aria-label="Senha" onChange={HandleSenha}/>
          <label className="noselect" htmlFor="floatingInput">Senha</label>
        </div>
        <div className="input-group form-floating">
          <input type="password" className="form-control" id="floatingInput" placeholder="Confirme a senha" aria-label="Senha" onChange={HandleConfirmeSenha}/>
          <label  className="noselect" htmlFor="floatingInput">Confirme a senha</label>
        </div>
        <div className="input-group form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Nome" aria-label="Nome" onChange={HandleNome}/>
          <label className="noselect" htmlFor="floatingInput">Nome completo</label>
        </div>
        <div className="btn-group">
          <button type="submit" className="btn" id="btnSubmit">Registrar-se</button>
        </div>
      </form>
  );
}
export default CadComponent;