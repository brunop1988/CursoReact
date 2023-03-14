import React from "react";
import { useState } from "react";

const Chequeo=(contador,stock)=> contador >= stock ? false : true



function Productos(props){
    const [contador,setContador] = useState(0)
    
    const Sumar=()=> setContador(Chequeo(contador,props.stock)? contador+1 : contador)

    const Restar=()=> setContador(contador-1) 

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
        <button className="indicadorStock">Quedan: {props.stock-contador}</button>
        <p className="controlGrupal">  
        <button onClick={Sumar} className="btnAgregar">
            +            
        </button>
        <input placeholder={contador}/>
        <button onClick={Restar} className="btnRestar"> 
              -
        </button>
        </p>
 </div>

            
        )
    }
export default Productos