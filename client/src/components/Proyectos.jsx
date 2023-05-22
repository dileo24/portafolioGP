import React from "react";
import figura1 from "../multimedia/figura1.png";
import figura2 from "../multimedia/figura2.png";

export default function Proyectos() {
  return (
    <section id="proyectos" className="proyectosContainer">
      <img src={figura1} className="figura1" alt="figura" />
      <img src={figura2} className="figura2" alt="figura" />
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
            style={{ textDecoration: "none" }}
          >
            <span>SanTor - Multipágina - Informativa</span>
          </a>
          <a
            href="https://san-tor.vercel.app/index.html"
            className="card"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <span>SanTor - Multipágina - Informativa</span>
          </a>
          <a
            href="https://san-tor.vercel.app/index.html"
            className="card"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <span>SanTor - Multipágina - Informativa</span>
          </a>
        </div>
        {/* <a className="button-proyectos" href="">
          VER MÁS
        </a> */}
      </div>
    </section>
  );
}
