import React from "react"

function Cartwidget(props){
    return ( 
    <span className="carrito">
      <img className="carrito" src={props.imagen} alt={props.alt}/>
      <strong className="notifCarrito">3</strong>
    </span>
    )

}

export default Cartwidget

