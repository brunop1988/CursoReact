import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Chequeo=(contador,stock)=> contador >= stock ? false : true


const ItemDetail = ({item}) => {
 
    const [contador,setContador] = useState(0)
    
    const Sumar=()=> setContador(Chequeo(contador,item.stock)? contador+1 : contador)
    const Restar=()=> contador===0? contador : setContador(contador-1) 
   



    return (
 
        <div className="detalleProducto">
        <div className={item.class}>
                    
            <img className="imgDetalle" src={item.image} alt={item.alt}/>
            <ul className="espacioDescripcion">
                 
                <li>
                    {item.name}
                </li>
                <li>
                    {item.description}
                </li>
            </ul>
         </div> 
            <Link to={"/"}><button className="btnAtras">
            Volver atrás
            </button></Link>
            
            <button className="stockDetalles">Quedan:{item.stock-contador}</button>
            <div className="controlGrupal">  
            <button onClick={Sumar} className="btnAgregarDetalles">
                +            
            </button>
            <input className="inputDetalles" placeholder={contador}/>
            <button onClick={Restar} className="btnRestar"> 
                  -
            </button>
            <button className="agregarCompra"> 
              Add
        </button>           
         </div>
     </div>
    
    )
 
}

export default ItemDetail    
