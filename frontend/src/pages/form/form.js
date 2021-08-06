import React, { Component, useState, useEffect, } from 'react';

// Import de libs de react.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import de componenets
import Navbar from '../../components/navbar/navbar';

// Import de CSS.
import './form.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

const Form = (props) => {
  return (
    <>
      <div id="main-form">
        <Navbar />
        <div id="container">
          <h1 className="text-center noselect">Formulário a ser enviado.</h1>
          <div className="container form-container">
            <form className="form">
              <div className="form-wrapper">
                <div className="content">
                  <div className="input-group form-floating">
                    <input type="name" className="defaultInput form-control" id="floatingInput" placeholder="Nome" aria-label="Nome" />
                    <label className="noselect" htmlFor="floatingInput">Nome</label>
                  </div>
                </div>
                <div className="content">
                  <label className="noselect">Text</label>
                  <textarea type="name" className="defaultTextArea form-control" id="floatingInput" placeholder="Nome" aria-label="Nome" />
                </div>
              </div>
              <div className="content">
                <label className="noselect">Escolha:</label>
                <ul className="list-group list-group-check-box">
                  <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    First checkbox
                  </li>
                  <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    Second checkbox
                  </li>
                  <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    Third checkbox
                  </li>
                  <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    Fourth checkbox
                  </li>
                  <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                    Fifth checkbox
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;