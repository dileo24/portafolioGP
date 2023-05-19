import React from "react";
import { useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ButtonExt from "./ButtonExt";
import Nosotros from "./Nosotros";
import Proyectos from "./Proyectos";
import Planes from "./Planes";
import Contacto from "./Contacto";

export default function Home() {
  /* class active por secciones */
  // const sectionAll = document.querySelectorAll("section[id]");
  // console.log(sectionAll);
  // window.addEventListener("scroll", () => {
  //   const scrollY = window.pageYOffset;
  //   sectionAll.forEach((current) => {
  //     const sectionHeight = current.offsetHeight;
  //     const sectionTop = current.offsetTop - 100;
  //     const sectionId = current.getAttribute("id");
  //     const hash = document.querySelector("nav a[href*=" + sectionId + "]");
  //     if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
  //       hash.classList.add("active");
  //     } else {
  //       hash.classList.remove("active");
  //     }
  //   });
  // });

  const pagina = useLocation().pathname;

  return (
    <div className="homeContainer">
      <Navbar />
      <div className="home-subContainer">
        <Nosotros />
        <ButtonExt pagina={pagina} />
        <Proyectos />
        <Planes />
        <Contacto />
      </div>
      <Footer />
    </div>
  );
}
