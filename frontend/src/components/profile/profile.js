import React from 'react';

// Import de libs de react.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import de CSS.
import './profile.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

const Profile = (props) => {
  return (
    <div className="container profile">
      <div className="btn-group-inverted">
        <div className="col me-2">
          <button className="btn btnSubmitB">Editar</button>
        </div>
        <div className="col me-2">
          <button className="btn btnSubmitApprove">Salvar</button>
        </div>
      </div>
      <div className="row">
        <h2 className="title">Informações pessoais</h2>
        <div className="input-group col">
          <input className="defaultInput form-control" id="floatingInput" placeholder="Nome completo" aria-label="Nome completo" />
        </div>
        <div className="input-group col">
          <input className="defaultInput form-control" id="floatingInput" placeholder="Número USP" aria-label="Número USP" />
        </div>
        <div className="input-group col">

          <input className="defaultInput form-control" id="floatingInput" placeholder="Email" aria-label="Email" />
        </div>
        <div className="input-group col">
          <input type="date" className="defaultInput form-control" id="floatingInput" placeholder="Data de nascimento" aria-label="Data de nascimento" />
        </div>
        <hr className="my-2" />
      </div>
      <div className="row">
        <h2 className="title">Informações do perfil Lattes</h2>
        <div className="input-group col">
          <input className="defaultInput form-control" id="floatingInput" placeholder="Data da ultima atualização do seu Lattes" aria-label="Data da ultima atualização do seu Lattes" />
        </div>
        <div className="input-group col">
          <input className="defaultInput form-control" id="floatingInput" placeholder="Link do perfil Lattes" aria-label="Link do perfil Lattes" />
        </div>
        <hr className="my-2" />
      </div>
      <div className="row">
        <h2 className="title">Informações adicionais.</h2>
        <div className="input-group col">
          <input className="defaultInput form-control" id="floatingInput" placeholder="Email" aria-label="Email" />
        </div>
        <div className="input-group col">
          <input className="defaultInput form-control" id="floatingInput" placeholder="Link do perfil Lattes" aria-label="Link do perfil Lattes" />
        </div>
        <hr className="my-2" />
      </div>
    </div>
  );
}

export default Profile;