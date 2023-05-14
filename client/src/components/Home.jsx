import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ButtonExt from "./ButtonExt";
import Nosotros from "./Nosotros";
import Proyectos from "./Proyectos";
import Planes from "./Planes";

export default function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="home-subContainer">
        <Nosotros />
        <ButtonExt />
        <Proyectos />
        <Planes />
      </div>
      <Footer />
    </div>
  );
}
