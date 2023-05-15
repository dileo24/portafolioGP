// Joaco

import React from "react";

export default function Planes() {
  return (
    <section id="planes" className="planesContainer">
      <div className="planesYPrecios">
        <div className="text">
          <p className="titulo">Planes y Precios</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eos,
            magni fugit iusto possimus vero, odit essefasfasfasfasd consequat
            incidunt assumenda reiciendis
          </p>
        </div>
      </div>

      <div className="planes">
        <div className="plan">
          <p className="nombrePlan">BRONCE</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quod maiores saepe doloremque sequi dicta?
          </p>
          <div className="detalles">
            <p>
              -Diseño tipo landing page o multipágina.
              <br />
              <br />
              -Hasta 4 secciones.
              <br />
              <br />
              -Vista responsive(adaptable a celulares, tablets, computadora).
              <br />
              <br />
              -Formulario de contacto.
              <br />
              <br />
            </p>
            <div className="precio">
              <p className="precioNum">$40.000 (ARS)</p>
              <p className="aclaracion">(Pago único)</p>
            </div>
          </div>
        </div>
        <div className="plan">
          <p className="nombrePlan">ORO</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quod maiores saepe doloremque sequi dicta?
          </p>
          <div className="detalles">
            <p>
              -Diseño tipo landing page o multipágina.
              <br />
              <br />
              -Hasta 8 secciones.
              <br />
              <br />
              -Vista responsive(adaptable a celulares, tablets, computadora).
              <br />
              <br />
              -Formularios ilimitados (contacto, cotizacion, etc).
              <br />
              <br />
              -Tema claro y oscuro.
              <br />
              <br />
              -Carga de información mas abundante (estilo Ecommerce por
              ejemplo).
              <br />
              <br />
              -Autogestionable por los administradores de su empresa (creacion
              de productos, eliminación de productos, etc).
              <br />
              <br />
              -Sistema de registro/inicio de sesión.
              <br />
              <br />
            </p>
            <div className="precio">
              <p className="precioNum">$100.000 (ARS)</p>
              <p className="aclaracion">(Pago único)</p>
            </div>
          </div>
        </div>
        <div className="plan">
          <p className="nombrePlan">PLATA</p>
          <p>
            -Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quod maiores saepe doloremque sequi dicta?
          </p>
          <div className="detalles">
            <p>
              -Diseño tipo landing page o multipágina.
              <br />
              <br />
              -Hasta 6 secciones.
              <br />
              <br />
              -Vista responsive(adaptable a celulares, tablets, computadora).
              <br />
              <br />
              -Hasta 3 formularios (contacto, cotizacion, etc).
              <br />
              <br />
              -Tema claro y oscuro.
              <br />
              <br />
              -Carga de información mas abundante (estilo Ecommerce por
              ejemplo).
            </p>
            <div className="precio">
              <p className="precioNum">$60.000 (ARS)</p>
              <p className="aclaracion">(Pago único)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
