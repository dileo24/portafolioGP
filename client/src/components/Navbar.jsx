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
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="./">
                Home
              </a>
              <a className="nav-link" href="./">
                Features
              </a>
              <a className="nav-link" href="./">
                Pricing
              </a>
              <a className="nav-link" href="#footer">
                Footer
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
