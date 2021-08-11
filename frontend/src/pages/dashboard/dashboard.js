import React, { Component, useState, useEffect, } from 'react';

// Import de libs de react.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from "react-router-dom";

// Import de componenets
import Navbar from '../../components/navbar/navbar';
import Profile from '../../components/profile/profile';

// Import de CSS.
import './dashboard.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

const Dashboard = (props) => {

  return (
    <>
      <Navbar />
      <div id="main-dash">
        
        <div className="container info">
          <div className="row">
            <div className="col list-menu-options">
              <div className="list-menu list-group list-group" id="list-tab" role="tablist">
                <Link to={{ pathname: "/Form/" }} className="list-menu-item list-group-item list-group-item-action noselect" role="tab" aria-controls="enviar formulário">Enviar Formulário</Link>
                <button className="list-menu-item list-group-item list-group-item-action noselect" data-bs-toggle="list" href="#list-editar-form" role="tab" aria-controls="list-profile">Editar Formulário</button>
                <button className="list-menu-item list-group-item list-group-item-action noselect" data-bs-toggle="list" href="#list-status-form" role="tab" aria-controls="list-messages">Status Formulário</button>
                <button className="list-menu-item list-group-item list-group-item-action noselect" data-bs-toggle="list" href="#list-perfil" role="tab" aria-controls="list-settings">Perfil</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade" id="list-editar-form" role="tabpanel" aria-labelledby="list-profile-list">v</div>
                <div className="tab-pane fade" id="list-status-form" role="tabpanel" aria-labelledby="list-messages-list">c</div>
                <div className="tab-pane fade" id="list-perfil" role="tabpanel" aria-labelledby="list-settings-list">
                  <Profile/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container noselect" id="about">
          <div className="row">
            <div className="col">
              <div><h2 className="text-center">Sobre</h2></div>
              <div>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit nisl vitae neque sodales placerat. Mauris leo lacus, ultricies sed egestas eget, gravida a magna. Quisque efficitur lectus a condimentum egestas. Curabitur erat sapien, tempus dictum orci ut, vulputate eleifend ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam sed varius mi, vitae suscipit orci. Nulla ante eros, blandit in ultricies sed, tincidunt et ligula. Cras blandit accumsan sem, ac eleifend purus ornare quis. Vestibulum eget sem eu leo vulputate placerat non sed justo. Maecenas lacinia dignissim mauris nec vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;