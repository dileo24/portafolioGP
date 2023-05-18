import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import imgPreg from "../multimedia/pregFrec.png";

export default function PregFrec() {
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
      <div className="pregContainer"></div>
      <Footer />
    </div>
  );
}
