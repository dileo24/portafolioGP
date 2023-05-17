// Joaco

import React from "react";
/* import persona from "../multimedia/persona.png"; */
import persona from "../multimedia/persona2.png";

export default function Contacto() {
  return (
    <section className="contactoContainer" id="contacto">
      <div className="formContainer">
        <form
          action="https://formsubmit.co/gopagearg@gmail.com"
          method="POST"
          name="contacto-santor"
          netlify="true"
        >
          <div className="text">
            <h1 className="titulo">Hablanos un poco más de vos...</h1>
            <p className="parrafo">
              ¿Listo para dar el siguiente paso? Nuestro equipo espera para
              brindarte la orientación que necesites, mientras tanto contanos un
              poco de qué tenés pensado para tu proyecto. ¡Te esperamos!
            </p>
          </div>
          <input type="hidden" name="_subject" value="Go Page Portafolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://gopage.vercel.app/#contacto"
          />
          <div className="inputS">
            <div className="inputSContainer">
              <div className="sect sect1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Nombre y apellido"
                />
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  required
                  placeholder="Nombre de empresa"
                />
                <input
                  type="text"
                  id="pais"
                  name="pais"
                  required
                  placeholder="País"
                />
              </div>

              <div className="sect sect2">
                <input
                  type="text"
                  id="ciud"
                  name="ciud"
                  required
                  placeholder="Ciudad"
                />

                <input
                  type="number"
                  id="cel"
                  name="cel"
                  className="celIn"
                  required
                  placeholder="Celular"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Correo electrónico"
                />
              </div>
            </div>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Contanos sobre tu empresa/negocio y lo que te gustaría conseguir con tu página, nos pondremos en contacto en cuanto podamos."
            ></textarea>

            <input type="submit" value="Enviar" className="btnEnviar" />
          </div>
        </form>
      </div>
      <div className="imagen">
        <img src={persona} alt="persona" />
      </div>
    </section>
  );
}
