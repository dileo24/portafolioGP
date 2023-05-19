import React, { useState } from "react";
import { useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import imgPreg from "../multimedia/pregFrec.png";
import ojoAbierto from "../multimedia/ojoAbierto.png";
import ojoCerrado from "../multimedia/ojoCerrado.png";
import ButtonExt from "./ButtonExt";
import preguntas from "../multimedia/preguntas.json";

export default function PregFrec() {
  const pagina = useLocation().pathname;
  const [mostrando, setMostrando] = useState(false);

  const handlePreg = (pregId) => {
    setMostrando((valorActual) => ({
      [pregId]: !valorActual[pregId],
    }));
  };

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
        <div className="pregsPagina">
          <h1>Preguntas de la Página</h1>
          {preguntas.map(
            (preg, pregId) =>
              preg.tipo === "pagina" && (
                <div className="preg" key={pregId}>
                  <div className="superior" onClick={() => handlePreg(pregId)}>
                    <p className="titulo">{preg.titulo}</p>
                    <img
                      src={mostrando[pregId] ? ojoAbierto : ojoCerrado}
                      alt="ojo"
                    />
                  </div>
                  {mostrando[pregId] && <p>{preg.resp}</p>}
                </div>
              )
          )}
        </div>
        <div className="pregsPlanes">
          <h1>Preguntas de Planes</h1>
          {preguntas.map(
            (preg, pregId) =>
              preg.tipo === "planes" && (
                <div className="preg" key={pregId}>
                  <div className="superior" onClick={() => handlePreg(pregId)}>
                    <p className="titulo">{preg.titulo}</p>
                    <img
                      src={mostrando[pregId] ? ojoAbierto : ojoCerrado}
                      alt="ojo"
                    />
                  </div>
                  {mostrando[pregId] && <p>{preg.resp}</p>}
                </div>
              )
          )}
        </div>
        <div className="pregsCom">
          <h1>Preguntas de comunicacion</h1>
          {preguntas.map(
            (preg, pregId) =>
              preg.tipo === "comunicacion" && (
                <div className="preg" key={pregId}>
                  <div className="superior" onClick={() => handlePreg(pregId)}>
                    <p className="titulo">{preg.titulo}</p>
                    <img
                      src={mostrando[pregId] ? ojoAbierto : ojoCerrado}
                      alt="ojo"
                    />
                  </div>
                  {mostrando[pregId] && <p>{preg.resp}</p>}
                </div>
              )
          )}
        </div>
      </div>
      <ButtonExt pagina={pagina} />
      <Footer />
    </div>
  );
}
