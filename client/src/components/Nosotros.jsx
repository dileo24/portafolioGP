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
        <a className="button-inicio" href="#planes">
          COMENCEMOS
        </a>
        <div className="GPcontainer">
          <img src={GP} alt="GP" className="GP" />
        </div>
      </div>

      <section id="info" className="info">
        <div className="flex-info">
          <h1 className="titulo-info">
            <span>G</span>o<span>P</span>age <br /> Desarrollo web
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
              Desde la planificación hasta la ejecución, valoramos la estructura
              y la eficiencia, asegurando de que cada detalle esté en su lugar y
              permitiéndonos entregar resultados de calidad y superar las
              expectativas de nuestros clientes.
            </div>
          </div>
          <div className="item-info">
            <div className="titulo-item">Flexibilidad</div>
            <div className="descr-item">
              Entendemos que cada cliente y cada proyecto son únicos, por eso
              nos ajustamos a tus necesidades y preferencias, ofreciendo
              soluciones personalizadas y creando una experiencia satisfactoria
              y sin complicaciones. Tu satisfacción es nuestra prioridad.
            </div>
          </div>
          <div className="item-info">
            <div className="titulo-item">Profesionalismo</div>
            <div className="descr-item">
              Valoramos la integridad, la confidencialidad y la transparencia en
              todo lo que hacemos. Puedes confiar en que serás atendido por
              expertos altamente capacitados, comprometidos con brindarte un
              servicio excepcional y resultados más que satisfactorios.
            </div>
          </div>
          <div className="item-info">
            <div className="titulo-item">Creatividad</div>
            <div className="descr-item">
              Nuestro equipo de profesionales creativos está constantemente
              buscando nuevas ideas y soluciones originales para llevar tus
              proyectos al siguiente nivel. Con nuestra pasión por la
              innovación, podemos ofrecerte propuestas frescas y sorprendentes
              que marcarán la diferencia en tu industria.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
