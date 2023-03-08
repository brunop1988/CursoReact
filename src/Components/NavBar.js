import Cartwidget from "./CartWidget.js";
import React from "react";

function Navbar(){
  return(
<div>
   
   <nav className="navbar">
   <Cartwidget imagen="img/carrito2.png" alt="carro"></Cartwidget>
        <ul>
       <li><a href="#home">Home</a></li>
       <li><a href="#news">Noticias</a></li>
       <li><a href="#contact">Contact</a></li>
       <li><a href="">Búsqueda de artículos
       <input type="search" placeholder="Marca, modelo..."/>
      <input type="submit" value="Buscar"/></a>
      </li>
      <li className="liAbout"><a className="active" href="#about">About</a></li>
    </ul>
  </nav>
</div>
  )
}
export default Navbar
