import React from "react";

function Productos(props){
        return(
        <div className="gondola">
            <div className={props.clase}>
                
             <img src={props.imagen} alt={props.alt}/>
             <p>
                {props.nombre}
            </p>

             <button>
                Agregar a la compra
            </button>
            
            </div>
        </div>

            
        )
    }
export default Productos