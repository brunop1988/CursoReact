
import React, { useContext } from "react"
import { CartContext } from "./CartContext.js"
import { Link } from "react-router-dom"

function Cartwidget(props){

const { getTotalItemCount } = useContext(CartContext) 
  return ( 
   <div className="carrito">
     <Link to={"/listaCarrito"} ><img className="carritoAnimacion" 
      src={props.imagen} alt={props.alt}/></Link>
      
      <button className="notifCarrito"><span>
          <>
          {getTotalItemCount(props.id)}
          </>
        </span></button>
    
  </div>
    )

}

export default Cartwidget

