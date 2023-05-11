import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="container">
        <h1 className="titulos">Hola</h1>
      </div>
      <Footer />
    </div>
  );
}
