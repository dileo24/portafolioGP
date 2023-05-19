import React from "react";
import logo from "../multimedia/logo2.PNG";

export default function Navbar() {
  function link(id) {
    var url = window.location.href; // Obtener la URL actual

    if (url.includes("help")) {
      return `https://gopage.vercel.app/${id}`;
    }
    return id;
  }

  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid containNav">
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
              <a className="nav-link" href={link("#info")}>
                Nosotros
              </a>
              <a className="nav-link" href={link("#proyectos")}>
                Portafolio
              </a>
              <a className="nav-link" href={link("#planes")}>
                Planes
              </a>
              <a className="nav-link" href={link("#contacto")}>
                Contacto
              </a>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}
