import React from 'react';
import { Link } from "react-router-dom";

// Import de libs de react
import 'bootstrap/dist/css/bootstrap.min.css';

// Import de API
// TODO.

// Import de CSS.
import './navbar.css';
import '../../misc/animations.css';
import '../../misc/misc.css';

const Navbar = (props) => {
    if(props.isOnFormsPage === true && props.isCoord === false){
      return (
        <nav className="navbar navbar-expand-lg nav-menu noselect">
          <a className="navbar-brand" href="#">PPgSI</a>
          <Link type="button" className="nav-link" to={{pathname: "/dashboard"}} replace>Voltar a dashboard</Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link type="button" className="nav-link" to={{pathname: "/login"}} replace>Logout</Link>
            </li>
          </ul>
        </nav>
      );
    } else if(props.isOnFormsPage === true && props.isCoord === true) { 
      return (
        <nav className="navbar navbar-expand-lg nav-menu noselect">
          <a className="navbar-brand" href="#">PPgSI</a>
          <Link type="button" className="nav-link" to={{pathname: "/adm/dashboard"}} replace>Voltar a dashboard</Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link type="button" className="nav-link" to={{pathname: "/login"}} replace>Logout</Link>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg nav-menu noselect">
          <a className="navbar-brand" href="#">PPgSI</a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link type="button" className="nav-link" to={{pathname: "/login"}} replace>Logout</Link>
            </li>
          </ul>
        </nav>
      );
    }
} 
export default Navbar;