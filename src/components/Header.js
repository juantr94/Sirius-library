import React from "react";
//import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Header () {
    return (
        <header className="header-footer mb-5">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid"> 
            <Link className="text-decoration-none"  to={"/sirius"}> <p className="nav-link text-decoration-none" >Sirius</p></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id=" ">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Link className="text-decoration-none" to={"/"}><p className="nav-link text-decoration-none" aria-current="page" >Home</p></Link>
                  </li>
                  <li className="nav-item">
                  <Link className="text-decoration-none" to={"/catalogo"}><p className="nav-link text-decoration-none" >Catálogo</p></Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" >Eventos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Productos</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    );
}

export default Header;