import React, { useState } from 'react';

// Import de libs de react
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';

// Import de API
import api from "../../api";

// Import de CSS.
import '../login/login.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

const CadComponent = (props) => {
  const [nome, setNome] = useState('');
  const [nome_usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmeSenha, setConfirmeSenha] = useState('');
  const [numero_usp, setNUSP] = useState('');

  async function HandleSubmit() {
    try {
      let myModal = undefined;
      if (senha === confirmeSenha) {
        await api
          .post("/users", { nome_usuario, email, senha, nome, numero_usp, tipo_usuario: 1 })
          .then(response => {
            console.log(response);
            myModal = new bootstrap.Modal(document.getElementById('cadastrado'), {
              keyboard: false
            })            
          });
      } else {
        alert("Suas senhas não batem!!!!");
      }
    } catch (error) {
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
    setEmail(e.target.value);
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
    <>
      <form action="" id="registerForm" className={`${(props.showCad === false) ? "nodisplay" : "showdisplay animadoDireitaParaEsquerda"}`} onSubmit={HandleSubmit}>
        <h3 className="text-center noselect">Cadastro</h3>
        <div className="input-group form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Usuário" aria-label="Usuário" onChange={HandleUsuario} />
          <label className="noselect" htmlFor="floatingInput">Usuário</label>
        </div>
        <div className="input-group form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Número USP" aria-label="Número USP" onChange={HandleNUSP} />
          <label className="noselect" htmlFor="floatingInput">Número USP</label>
        </div>
        <div className="input-group form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="Email" aria-label="Email" onChange={HandleEmail} />
          <label className="noselect" htmlFor="floatingInput">Email</label>
        </div>
        <div className="input-group form-floating">
          <input type="password" className="form-control" id="floatingInput" placeholder="Senha" aria-label="Senha" onChange={HandleSenha} />
          <label className="noselect" htmlFor="floatingInput">Senha</label>
        </div>
        <div className="input-group form-floating">
          <input type="password" className="form-control" id="floatingInput" placeholder="Confirme a senha" aria-label="Senha" onChange={HandleConfirmeSenha} />
          <label className="noselect" htmlFor="floatingInput">Confirme a senha</label>
        </div>
        <div className="input-group form-floating">
          <input type="text" className="form-control" id="floatingInput" placeholder="Nome" aria-label="Nome" onChange={HandleNome} />
          <label className="noselect" htmlFor="floatingInput">Nome completo</label>
        </div>
        <div className="btn-group">
          <button type="submit" className="btn" id="btnSubmit">Registrar-se</button>
        </div>
      </form>
      <div class="modal fade" id="cadastro" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CadComponent;