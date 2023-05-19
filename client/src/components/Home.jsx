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
  window.addEventListener("DOMContentLoaded", function () {
    var url = new URL(window.location.href);
    console.log(url);
    var hash = url.hash;
    console.log(hash);

    // Verificar si hay un hash y si existe un elemento con ese ID
    if (hash && document.querySelector(hash)) {
      var targetElement = document.querySelector(hash);
      console.log(targetElement);

      // Realizar el scroll suave hacia el elemento objetivo
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });

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
