import React from "react"
import { Link } from "react-router-dom"





 function Item({item}){ 

    



        return(   
 <div className="gondola">
     <div className={item.class}>
            
        <img src={item.image} alt={item.name}/>
        <ul className="caracteristicasProducto">
             
            <li className="nombre">
                {item.name}
            </li>
            <li className="descripcion1">
                {item.description1}
            </li>
           
        </ul>
     </div> 
     <div className="botonesGondola">
        <Link to={`/item/${item.id}`}><button className="btnDetalles">
        Ver detalles
        </button></Link>
        </div>
        
           
         
 </div>

            
        )
    }
export default Item