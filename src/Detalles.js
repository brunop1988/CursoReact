import React from "react";
import { Link } from "react-router-dom";


export default function Detalles(props){
 
    
    return(
            <div className="gondola">
               <p className={props.class}>

                   <img src={props.image} alt={props.alt}/>
                   <ul className="caracteristicasProducto">
                        
                       <li>
                           {props.name}
                       </li>
                      
                   </ul>
                           
               </p> 
                   <button className="btnDetalles"><Link to="/"/>
                       Ver detalles
                   </button>
           </div>
    )               
    
}