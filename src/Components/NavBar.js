import Cartwidget from "./CartWidget.js";
import React from "react";
import { Link } from "react-router-dom";
function Navbar(){
  return(
<div>
   
   <nav className="navbar">
   <Cartwidget imagen="img/carrito2.png" alt="carro" />
        <ul className="listaNavbar">
       <li><Link to="/">Home</Link></li>
       <li><Link to="/category/laptop">PC</Link></li>
       <li><Link to="/category/tablet">Tablet</Link></li>
       <li><button className="botonBusqueda">Búsqueda de artículos
       <input className="espacioBuscar" type="search" placeholder="Marca, modelo..."/>
      <input type="submit" value="Buscar"/></button>
      </li>
      <li className="liAbout"><Link className="active" href="#about">About</Link></li>
     
    </ul>
    
  </nav>
 
</div>

  )
}
export default Navbar
