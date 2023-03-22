import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"


const Chequeo=(contador,stock)=> contador >= stock ? false : true



function Item(item){ 
   
    const [contador,setContador] = useState(0)
    
    const Sumar=()=> setContador(Chequeo(contador,item.stock)? contador+1 : contador)

    const Restar=()=> setContador(contador-1) 

        return(
 <div className="gondola">
    <div className={item.class}>
                
        <img src={item.image} alt={item.alt}/>
        <ul className="caracteristicasProducto">
             
            <li>
                {item.name}
            </li>
        </ul>
     </div> 
        <Link to={`/item/:${item.id}`}><button className="btnDetalles">
        Ver detalles 
        </button></Link>
        
        <button className="indicadorStock">Quedan: {item.stock-contador}</button>
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
export default Item