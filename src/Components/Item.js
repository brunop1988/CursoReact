import React from "react"
import { Link } from "react-router-dom"





 function Item({item}){ 

    



        return(   
 <div className="gondola">
     <div className={item.class}>
            
        <img src={item.image} alt={item.name}/>
        <div className="caracteristicasProducto">
             
            <p className="nombre">
                {item.name}
            </p>
            <p className="descripcion1">
                {item.description1}
            </p>
           
        </div>
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