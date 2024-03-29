import React from 'react'
import { CartContext } from './CartContext.js'
import { useContext } from "react";
import { Link } from 'react-router-dom';

const SalesList = () => {

    const { cart, getTotalPrice } = useContext(CartContext) 

    

  return (
    <div className="listaCarrito" >
        
        {cart.map(item=>(
            <div key={item.id}>
            <h1>{item.amount} {item.name}</h1>
        
            <h2 className='imagenCarrito'><img src={item.image} alt={item.alt}/></h2>
            <h2 className='precioUnitario'>Precio unitario: US$ {item.price}</h2>
            <h2 className='precioArticulo'>Precio total de artículo: US$ {item.price*item.amount}</h2>

            </div> 
            
            ))}
        <h2 className='precioTotal'>
            Precio total: US$ {getTotalPrice()}
        </h2>
      <div className='botonesCompra'>
      <Link  className="nav-link" to={'/'}><button className="continuarComprando">Continuar comprando</button></Link>
      <Link  className="nav-link" to={'/checkout'}><button className="confirmarCompra">Finalizar Compra</button></Link>
      </div>
    </div>
  )
}

export default SalesList


