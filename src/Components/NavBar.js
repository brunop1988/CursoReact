import Cartwidget from "./CartWidget.js";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./CartContext.js";

function Navbar(){
  const contexto = useContext(CartContext)

  return(
<div>
   
   <nav className="navbar">
   <Cartwidget imagen="https://i.ibb.co/N33F6yf/carrito2.png" alt="carro" />
        <ul className="listaNavbar">
       <li><Link to="/">Home</Link></li>
       <li><Link to="/category/pc">PC</Link></li>
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
