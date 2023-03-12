import Cartwidget from "./CartWidget.js";
import React from "react";

function Navbar(){
  return(
<div>
   
   <nav className="navbar">
   <Cartwidget imagen="img/carrito2.png" alt="carro" />
        <ul className="listaNavbar">
       <li><a href="#home">Home</a></li>
       <li><a href="#news">Categorías</a></li>
       <li><a href="#contact">Contact</a></li>
       <li><button className="botonBusqueda">Búsqueda de artículos
       <input type="search" placeholder="Marca, modelo..."/>
      <input type="submit" value="Buscar"/></button>
      </li>
      <li className="liAbout"><a className="active" href="#about">About</a></li>
    </ul>
  </nav>
</div>
  )
}
export default Navbar
