// Joaco

import React from "react";

export default function Contacto() {
  return (
    <section className="contactoContainer" id="contacto">
      <span></span>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sit
              mollitia vel iusto? Voluptate magnam quis, harum ipsum optio
              doloremque ipsa dolores eum, cumque temporibus nisi ducimus ipsam
              eius officia?
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
            <div className="sect">
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

            <div className="sect">
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

            <textarea
              id="message"
              name="message"
              required
              placeholder="Cuéntenos sobre su empresa/negocio y lo que le gustaría conseguir con su página..."
            ></textarea>

            <input type="submit" value="Enviar" className="btnEnviar" />
          </div>
        </form>
      </div>
    </section>
  );
}
