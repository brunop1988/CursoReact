import React from "react";

function Productos(props){
        return(
        <div className="gondola">
            <div className={props.clase}>
                
             <img src={props.imagen} alt={props.alt}/>
            <ul className="caracteristicasProducto">
             
             <li>{props.nombre}</li>
            
            <li className="p2">
                {props.nombre2}
            </li> 
            <li className="p3">
                {props.nombre3}
            </li>
            <li className="p4">
                {props.nombre4}
            </li>
            </ul>
                       
            </div>
            <button className="btnDetalles">
            Ver detalles            
            </button>
            <button className="btnAgregar">
            Agregar            
            </button>
        </div>

            
        )
    }
export default Productos