import Cartwidget from "./CartWidget.js"
import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "./CartContext.js"


function Navbar(){
 const {clearCart} = useContext(CartContext)
  return(
<div>
   
   <nav className="navbar">
   <Cartwidget imagen="https://i.ibb.co/N33F6yf/carrito2.png" alt="carro"/>
   <button className="botonVaciar" onClick={() => clearCart()}> 
            <img className="vaciarCarrito" alt="papelera" src="https://i.ibb.co/kDB93nP/Emptytrash-folder-file-10466.png"/>
    </button>     
    <ul className="listaNavbar">
       
      <li><Link to="/">Home</Link></li>
      <li><Link to="/category/laptop">Laptop</Link></li>
      <li><Link to="/category/tablet">Tablet</Link></li>
      <li><button className="botonBusqueda">Búsqueda de artículos

      <input className="espacioBuscar" type="search" placeholder="Marca, modelo..."/>
      <input type="submit" value="buscar"/></button>
      
      </li>
      <li className="liAbout"><Link className="active" href="#about">About</Link></li>
     
    </ul>
    
  </nav>
 
</div>

  )
}
export default Navbar
