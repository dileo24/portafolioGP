import React, { useState } from "react";
import iconoImage from "../multimedia/iconoMenu.png";
import iconoImageCerrado from "../multimedia/iconoMenuCerrado.png";
import iconoWpp from "../multimedia/icon-wpp.png";
import iconoIg from "../multimedia/icon-instagram.png";
import iconoLd from "../multimedia/icon-linkedin.png";
import ayuda from "../multimedia/ayuda.png";

export default function ButtonExt() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="buttonContainerr">
      <button
        className={`buttonExt ${menuOpen && "open"}`}
        onClick={handleButtonClick}
      >
        {menuOpen ? (
          <img className="icono" src={iconoImageCerrado} alt="Icono" />
        ) : (
          <img className="icono" src={iconoImage} alt="Icono" />
        )}
      </button>
      {menuOpen && (
        <div className="menu">
          <a
            className="circle"
            href="https://wa.me/+543516863857"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconoWpp} alt="imgWpp" className="icono" />
          </a>
          <a
            className="circle"
            href="https://www.instagram.com/gopagearg/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconoIg} alt="insta" className="icono" />
          </a>
          <a
            className="circle"
            href="https://www.linkedin.com/company/gopage-disweb/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconoLd} alt="linkedin" className="icono" />
          </a>
          <a className="circle" href="./" target="_blank" rel="noreferrer">
            <img src={ayuda} alt="ayuda" className="icono" />
          </a>
        </div>
      )}
    </div>
  );
}
