// Lauti

import React from "react";

export default function Proyectos() {
  return (
    <section id="proyectos" className="proyectosContainer">
      <h1 className="titulo-proyectos">
        Descubre más sobre <br /> nuestros trabajos
      </h1>
      <div className="descr-proyectos">
        Aquí podrás ver y elegir entre todos nuestros trabajos realizados.
      </div>
      <div className="cards">
        <div className="cards-flex">
          <a
            href="https://san-tor.vercel.app/index.html"
            className="card"
            target="_blank"
            rel="noreferrer"
          >
            <span>url</span>
          </a>
          <a
            href="https://san-tor.vercel.app/index.html"
            className="card"
            target="_blank"
            rel="noreferrer"
          >
            <span>url</span>
          </a>
          <a
            href="https://san-tor.vercel.app/index.html"
            className="card"
            target="_blank"
            rel="noreferrer"
          >
            <span>url</span>
          </a>
        </div>
        {/* <a className="button-proyectos" href="">
          VER MÁS
        </a> */}
      </div>
    </section>
  );
}
