// Lauti

import React from "react";

export default function Proyectos() {
  return (
    <div className="proyectosContainer">
      <div className="titulo-proyectos">
        Descubre más sobre <br /> nuestros trabajos
      </div>
      <div className="descr-proyectos">
        Aquí podrás ver y elegir entre todos nuestros trabajos realizados.
      </div>
      <div className="cards">
        <div className="cards-flex">
          <a
            href="https://san-tor.vercel.app/index.html"
            className="card"
            target="_blank"
          ></a>
          <a
            href="https://san-tor.vercel.app/index.html"
            className="card"
            target="_blank"
          ></a>
          <a
            href="https://san-tor.vercel.app/index.html"
            className="card"
            target="_blank"
          ></a>
        </div>
        {/* <a className="button-proyectos" href="">
          VER MÁS
        </a> */}
      </div>
    </div>
  );
}
