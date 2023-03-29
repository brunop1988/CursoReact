import React, { useContext } from "react"
import { CartContext } from "./CartContext.js"

function Cartwidget(props){

const { items } = useContext(CartContext) 
  return ( 
   <div className="carrito">
     <img className="carritoAnimacion" src={props.imagen} alt={props.alt}/>
        <button  className="notifCarrito"><span>{items}</span></button>
  </div>
    )

}

export default Cartwidget

