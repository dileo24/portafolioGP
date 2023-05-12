import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ButtonExt from "./ButtonExt";
import Nosotros from "./Nosotros";

export default function Home() {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="home-subContainer">
        <Nosotros />
        <ButtonExt />
      </div>
      <Footer />
    </div>
  );
}
