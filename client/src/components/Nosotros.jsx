// Lauti

import React from "react";
import GP from "../multimedia/GP.png";

export default function Nosotros() {
  return (
    <div className="nosotrosContainer">
      <div className="inicio">
        <h1 className="titulo-inicio">
          Creamos soluciones <br /> a tu medida
        </h1>
        <p className="descr-inicio">
          En GoPage entendemos que cada cliente es diferente y tiene necesidades
          únicas. Por eso, nos adaptamos a tus requerimientos y creamos
          soluciones personalizadas que se ajustan a tus necesidades. Somos
          flexibles para brindarte un servicio de calidad que supere tus
          expectativas.
        </p>
        <a className="button-inicio" href="#info">
          COMENCEMOS
        </a>
        <div className="GPcontainer">
          <img src={GP} alt="GP" className="GP" />
        </div>
      </div>

      <div id="info" className="info">
        <div className="flex-info">
          <h1 className="titulo-info">
            GoPage <br /> Desarrollo web
          </h1>

          <p className="descr-info">
            A través de nuestros valores, creamos diseños web que cautivan y
            transmiten la esencia de tu marca. Nos aseguramos de que cada
            detalle esté cuidadosamente ejecutado, y de esta manera, garantizar
            resultados que superen tus expectativas.
          </p>
        </div>

        <div className="items-info">
          <div className="item-info">
            <div className="titulo-item">Orden</div>
            <div className="descr-item">
              Duis autem vel eum iriure dolor endrerit in vutate velit esse
              moleonsequat, vel illum dolore eusd feugiat nulla facilisis at
              vero eros et accumsan et iusto.
            </div>
          </div>
          <div className="item-info">
            <div className="titulo-item">Flexibilidad</div>
            <div className="descr-item">
              Duis autem vel eum iriure dolor endrerit in vutate velit esse
              moleonsequat, vel illum dolore eusd feugiat nulla facilisis at
              vero eros et accumsan et iusto.
            </div>
          </div>
          <div className="item-info">
            <div className="titulo-item">Profesionalismo</div>
            <div className="descr-item">
              Lorem ipsum dolor sit amet, conseetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolor magna aliquam erat
              volutpat.
            </div>
          </div>
          <div className="item-info">
            <div className="titulo-item">Creatividad</div>
            <div className="descr-item">
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper scipit lobortis nisl ut aliquip ex ea comodo
              consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
