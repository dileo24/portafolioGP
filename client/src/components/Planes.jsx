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
          <p className="text">
            Plan ideal para su primera página, una opción económica pero
            perfectamente funcional en la que mostrar toda su
            informacion/productos/formas de contacto.
          </p>
          <div className="detalles">
            <p className="text">
              Diseño tipo landing page o multipágina.
              <br />
              <br />
              Hasta 4 secciones.
              <br />
              <br />
              Vista responsive (adaptable a celulares, tablets, computadora).
              <br />
              <br />
              Formulario de contacto.
              <br />
              <br />
            </p>
            <div className="precio">
              <div className="prec">
                <p className="moneda"> AR$</p>
                <p className="precioNum">40.000 </p>
              </div>
              <p className="aclaracion">(Precio final)</p>
            </div>
          </div>
          <button>LO QUIERO</button>
        </div>
        <div className="plan">
          <p className="nombrePlan">ORO</p>
          <p className="text">
            Plan especializado para comercios en constante movimiento de
            clientes, precios, información... Mejorará ampliamente el control de
            venta y podrá usted mismo gestionar cada dato!
          </p>
          <div className="detalles">
            <p className="text">
              Diseño tipo landing page o multipágina.
              <br />
              <br />
              Hasta 8 secciones.
              <br />
              <br />
              Vista responsive (adaptable a celulares, tablets, computadora).
              <br />
              <br />
              Formularios ilimitados (contacto, cotización, etc).
              <br />
              <br />
              Tema claro y oscuro.
              <br />
              <br />
              Carga de información más abundante (estilo Ecommerce por ejemplo).
              <br />
              <br />
              Autogestionable y sistema de registro/inicio de sesión.
              <br />
              <br />
            </p>
            <div className="precio">
              <div className="prec">
                <p className="moneda"> AR$</p>
                <p className="precioNum">100.000 </p>
              </div>
              <p className="aclaracion">(Precio final)</p>
            </div>
          </div>
          <button className="ORObtn">LO QUIERO</button>
        </div>
        <div className="plan">
          <p className="nombrePlan">PLATA</p>
          <p className="text">
            Plan enfocado en pequeñas empresas que necesitan hacer un listado de
            productos o servicios especificos, ideal para llegar de mejor manera
            al cliente y agilizar procesos de ventas
          </p>
          <div className="detalles">
            <p className="text">
              Diseño tipo landing page o multipágina.
              <br />
              <br />
              Hasta 6 secciones.
              <br />
              <br />
              Vista responsive (adaptable a celulares, tablets, computadora).
              <br />
              <br />
              Hasta 3 formularios (contacto, cotizacion, etc).
              <br />
              <br />
              Tema claro y oscuro.
              <br />
              <br />
              Carga de información mas abundante (estilo Ecommerce por ejemplo).
            </p>
            <div className="precio">
              <div className="prec">
                <p className="moneda"> AR$</p>
                <p className="precioNum">60.000 </p>
              </div>
              <p className="aclaracion">(Precio final)</p>
            </div>
          </div>
          <button>LO QUIERO</button>
        </div>
      </div>
    </section>
  );
}
