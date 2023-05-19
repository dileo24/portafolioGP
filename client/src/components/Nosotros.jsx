// Lauti

import React from "react";
import GP from "../multimedia/GP.png";
import circulos3D from "../multimedia/figura6.png";

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

      <section className="beneficios">
        <div className="box1">
          <h1 className="titulo-beneficios">
            ¿Por qué es tan <br /> importante tener <br /> un sitio web?
          </h1>
          <a className="button-beneficios" href="#beneficios">
            VER MÁS PREGUNTAS FRECUENTES
          </a>
        </div>
        <div className="box2">
          <div className="subtitulo-beneficios">
            Una página web ofrece múltiples beneficios para tu negocio
          </div>
          <p className="descr-beneficios">
            Presencia en línea las 24 horas, con un alcance global,
            oportunidades de marketing y promoción. Dando credibilidad y
            confianza, ventas en línea y atención al cliente, así como análisis
            y mejora continua. Es una de las inversión clave para impulsar tu
            negocio y poder alcanzar tus objetivos comerciales.
          </p>
        </div>
        <div className="box3"></div>
        <div className="circulos3D">
          <img src={circulos3D} alt="circulos3D" />
        </div>
        <div className="frase">
          <p>
            <i>
              {" "}
              "Tu sitio web es tu tarjeta de presentación en el mundo digital.
              Asegúrate de que sea memorable, funcional y refleje la esencia{" "}
              <br /> de tu marca".
            </i>{" "}
            <br /> - Rand Fishkin, cofundador de Moz.
          </p>
        </div>
      </section>

      <section id="info" className="info">
        <div className="flex-info">
          <h1 className="titulo-info">
            GoPage <br /> Desarrollo web
            <br />
            <span> ¿Quiénes somos?</span>
          </h1>

          <p className="descr-info">
            Somos una empresa de desarrollo web especializada en crear sitios
            web a medida para negocios y emprendedores. Nuestro objetivo
            principal es ayudarte a establecer una sólida presencia en línea al
            proporcionarte soluciones profesionales. Confía en nosotros para
            impulsar tu negocio en el mundo digital y brindar a tus clientes una
            experiencia única y atractiva en línea.
          </p>
        </div>

        <div className="items-info">
          <div className="item-info">
            <div className="titulo-item">Orden</div>
            <div className="descr-item">
              La planificación detallada y ordenada es el pilar de nuestros
              trabajos.
            </div>
          </div>
          <div className="item-info">
            <div className="titulo-item">Flexibilidad</div>
            <div className="descr-item">
              Valoramos la flexibilidad constante en nuestro enfoque y
              soluciones.
            </div>
          </div>
          <div className="item-info">
            <div className="titulo-item">Profesionalismo</div>
            <div className="descr-item">
              Nos comprometemos a brindar un servicio de alta calidad y
              fiabilidad.
            </div>
          </div>
          <div className="item-info">
            <div className="titulo-item">Creatividad</div>
            <div className="descr-item">
              Buscamos constantemente nuevas ideas y enfoques que destaquen tu
              negocio en línea.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
