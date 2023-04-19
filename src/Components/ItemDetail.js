import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext.js";
import { useContext } from "react";



const ItemDetail = ({item}) => {
    const { addItem ,removeItem } = useContext(CartContext)
 
    const [contador,setContador] = useState(0)
    
    const sumar=()=> setContador(contador+1)

    const restar=()=> setContador(contador-1) 




    return (
 
        <div className="detalleProducto">
        <div>
       
            <img className="imgDetalle" src={item.image} alt={item.name}/>
            <p className="nombreDetalle">{item.name}</p>
            <ol className="espacioDescripcion">         
              
                <li className="itemDescripcion1">
                    {item.description1}
                </li>
                <li className="itemDescripcion2">
                    {item.description2}
                </li>
                
                <li className="itemDescripcion3">
                    {item.description3}
                </li>
                
                <li className="itemDescripcion4">
                    {item.description4}
                </li>
                
                <li className="itemDescripcion5">
                    {item.description5}
                </li>
                <li>
                     <button className="precioProducto">US$ {item.price}</button>
                </li>
                <li className="liStockDetalles">
                <button className="stockDetalles">Quedan:{item.stock-contador}</button>

                </li>
            
            </ol>
         </div>
          <div className="controlGrupalDetalles">
            <Link to={"/"}><button className="btnAtras">
            Volver atrás
            </button></Link>
            
            <button className="quitarCompra" onClick={() => removeItem(item.id)}> 
              Quitar producto
            </button>
            <p className="inputDetalles">  
            <button onClick={sumar} disabled={contador>=item.stock} className="btnAgregarDetalles">
                +            
            </button>
            <input placeholder={contador}/>
            <button onClick={restar} disabled={contador===0} className="btnRestar"> 
                  -
            </button>
             <button className="agregarCompra" onClick={() => addItem(item,contador)}> 
              Agregar al <img className="carroBoton" src="https://i.ibb.co/98CrknM/carroboton.png" alt="lcdth"/>
            </button>                 
           </p>
              
         </div>
     </div>
    
    )
}

export default ItemDetail    
