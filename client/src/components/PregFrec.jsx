import React from "react";
import { useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import imgPreg from "../multimedia/pregFrec.png";
import ButtonExt from "./ButtonExt";

export default function PregFrec() {
  const pagina = useLocation().pathname;

  return (
    <div className="pregContainer">
      <Navbar />
      <div className="inicio">
        <p className="titulo">Preguntas Frecuentes de Nuestros Clientes</p>
        <p className="subText">
          A continuación vas a poder ver las preguntas más importantes que hemos
          recibido de clientes, estas facilitarán el entender la importancia de
          digitalizar todo proceso productivo, de información o de compra.{" "}
          <br />
          Por supuesto, ante cualquier duda no planteada acá, recordá que podés
          contactar con nosotros y responderemos lo antes posible!
        </p>

        <div className="imgContainer">
          <img src={imgPreg} alt="img" />
        </div>
      </div>
      <div className="pregContainer">
        <div className="preg">
          <p className="titulo">PREGUNTA NUMERO UNO</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            aspernatur ullam soluta sit, tempore quia sequi nam eius esse enim
            sapiente non reprehenderit, omnis architecto dolores veniam!
            Assumenda, doloremque excepturi.
          </p>
        </div>
        <div className="preg">
          <p className="titulo">PREGUNTA NUMERO DOS</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            aspernatur ullam soluta sit, tempore quia sequi nam eius esse enim
            sapiente non reprehenderit, omnis architecto dolores veniam!
            Assumenda, doloremque excepturi.
          </p>
        </div>
        <div className="preg">
          <p className="titulo">PREGUNTA NUMERO TRES</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            aspernatur ullam soluta sit, tempore quia sequi nam eius esse enim
            sapiente non reprehenderit, omnis architecto dolores veniam!
            Assumenda, doloremque excepturi.
          </p>
        </div>
        <div className="preg">
          <p className="titulo">PREGUNTA NUMERO CUATRO</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            aspernatur ullam soluta sit, tempore quia sequi nam eius esse enim
            sapiente non reprehenderit, omnis architecto dolores veniam!
            Assumenda, doloremque excepturi.
          </p>
        </div>
        <div className="preg">
          <p className="titulo">PREGUNTA NUMERO CINCO</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            aspernatur ullam soluta sit, tempore quia sequi nam eius esse enim
            sapiente non reprehenderit, omnis architecto dolores veniam!
            Assumenda, doloremque excepturi.
          </p>
        </div>
        <div className="preg">
          <p className="titulo">PREGUNTA NUMERO SEIS</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            aspernatur ullam soluta sit, tempore quia sequi nam eius esse enim
            sapiente non reprehenderit, omnis architecto dolores veniam!
            Assumenda, doloremque excepturi.
          </p>
        </div>
      </div>
      <ButtonExt pagina={pagina} />
      <Footer />
    </div>
  );
}
