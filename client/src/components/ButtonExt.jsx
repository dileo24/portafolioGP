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
          <img className="icono" src={iconoImage} alt="Icono" />
        ) : (
          <img className="icono" src={iconoImageCerrado} alt="Icono" />
        )}
      </button>
      {menuOpen && (
        <div className="menu">
          <div className="circle">
            <img src={iconoWpp} alt="imgWpp" className="icono" />
          </div>
          <div className="circle">
            <img src={iconoIg} alt="imgWpp" className="icono" />
          </div>
          <div className="circle">
            <img src={iconoLd} alt="imgWpp" className="icono" />
          </div>
          <div className="circle">
            <img src={ayuda} alt="imgWpp" className="icono" />
          </div>
        </div>
      )}
    </div>
  );
}
