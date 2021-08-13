import React from 'react';

// Import de libs de react.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from "react-router-dom";

// Import de CSS.
import './status.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

const Status = (props) => {
  const forms = {
    id: props.id,
    form: props.obj
  };

  function pushFormEdit(props) {
    props.history.push(
      {
        pathname: "/edit/",
        state: props.id
      }
    );
  }

  // Mostra para editar o form.
  if (props.typeEdit !== false && props.typeEdit !== undefined) {
    return (
      <div className="card noselect">
        <div className="card-header"><h4 className="text-center">{props.nomeRelatorio}</h4></div>
        <div className="card-body">
          <div className="card-text">
            <p className="status-info">{props.descricaoRelatorio}</p>
          </div>
          <hr className="me-2"></hr>
          <div className="btn-group">
            <div className="btn-div-size">
              <Link to={{ pathname: `/edit/${props.id}`, params: props.id }} replace><button type="button" className="btn btnSubmitO" id="btnSubmit">Editar</button></Link>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <p className="text-center">Data limite para editar: {props.data}</p>
        </div>
      </div>
    );
  } else if ((props.coord === true)) {
    return (
      <>
        <div className="card noselect">
          <div className="card-header"><h4 className="text-center">{props.nomeRelatorio}</h4></div>
          <div className="card-body">
            <div className="card-text">
              <p className="status-info">{props.descricaoRelatorio}</p>
            </div>
            <hr className="me-2"></hr>
            <div className="card-text">
              <p className="status-comentário">{props.comentarioCoord}</p>
            </div>
            <hr className="me-2"></hr>
            <div className="btn-group">
              <Link to={{ pathname: `/adm/edit/${props.id}`, params: props.id }} replace><button type="button" className="btn btnSubmitO" id="btnSubmit">Avaliar</button></Link>
            </div>
          </div>
          <div className="card-footer ">
            <div className="btn-group">
              <div className="btn-div-size">
                <button type="button" className="btn btnSubmitApprove" id="btnSubmit" data-bs-toggle="modal" data-bs-target="#aprovado">Aprovar</button>
              </div>
              <div className="btn-div-size">
                <button type="button" className="btn btnSubmitClose" id="btnSubmit" data-bs-toggle="modal" data-bs-target="#reprovado">Reprovar</button>
              </div>
            </div>
          </div>
        </div>
        <div id="aprovado" className="modal" tabindex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Relatório Aprovado</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btnSubmitB" data-bs-dismiss="modal">Fechar</button>
              </div>
            </div>
          </div>
        </div>

        <div id="reprovado" className="modal" tabindex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Relatório Reprovado</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btnSubmitB" data-bs-dismiss="modal">Fechar</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    // Mostra apenas o status do relatório
    return (
      <div className="card noselect">
        <div className="card-header"><h4 className="text-center">{props.nomeRelatorio}</h4></div>
        <div className="card-body">
          <div className="card-text">
            <p className="status-info">{props.descricaoRelatorio}</p>
          </div>
          <hr className="me-2"></hr>
          <div className="card-text">
            <p className="status-comentário">{props.comentarioCoord}</p>
          </div>
        </div>
        <div className={"card-footer " + props.relStatus}>
          <h4 className="text-center">{props.statusDado}</h4>
        </div>
      </div>
    );
  }
}

export default Status;