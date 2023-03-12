import React from "react";

function Productos(props){
        return(
 <div className="gondola">
    <div className={props.clase}>
                
        <img src={props.imagen} alt={props.alt}/>
        <ul className="caracteristicasProducto">
             
            <li>
                {props.nombre}
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