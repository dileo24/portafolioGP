import React from "react";
import logo from "../multimedia/logo2.PNG";

export default function Navbar() {
  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="./">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <nav className="navbar-nav">
              <a className="nav-link" aria-current="page" href="#info">
                Nosotros
              </a>
              <a className="nav-link" href="#proyectos">
                Portafolio
              </a>
              <a className="nav-link" href="#planes">
                Planes
              </a>
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}
