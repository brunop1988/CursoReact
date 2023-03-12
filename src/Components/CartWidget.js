import React from "react"

function Cartwidget(props){
  
  return ( 
   <div className="carrito">
     <img className="carritoAnimacion" src={props.imagen} alt={props.alt}/>
        <button  className="notifCarrito"><span>4</span></button>
  </div>
    )

}

export default Cartwidget

