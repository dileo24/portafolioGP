import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ButtonExt from "./ButtonExt";

export default function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="container">
        <h1 className="titulos">Hola</h1>
        <ButtonExt />
      </div>
      <Footer />
    </div>
  );
}
