import React, { useContext, useState } from 'react'
import {  toast } from 'react-toastify';
import { createOrdenCompra,getOrdenCompra,getProducto,updateProducto } from '../Firebase/Firebase.js';
import {  useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext.js';
import { error } from 'jquery';

const Checkout = () => {
  const [isInvalid, setIsInvalid] = useState(false)
  const {getTotalPrice, cart, clearCart} = useContext(CartContext)
  const datosFormulario = React.useRef()
  let navigate = useNavigate()
  const consultarFormulario = (e) => {
      e.preventDefault()
      const datForm = new FormData(datosFormulario.current)
      const cliente = Object.fromEntries(datForm)

      const aux = [...cart]
      console.log(cliente.email,cliente.email2)
if (cliente.email === cliente.email2){
      aux.forEach(prodCarrito => {
          getProducto(prodCarrito.id).then(prodBDD => {
              if(prodBDD.stock >= prodCarrito.amount) {
                  prodBDD.stock -= prodCarrito.amount
                  updateProducto(prodCarrito.id, prodBDD)

              } else {
                    console.error(error)                  
              }
          })
      })

      

      createOrdenCompra(cliente,cart, getTotalPrice(), new Date().toISOString()).then(ordenCompra => {
          getOrdenCompra(ordenCompra.id).then(item => {
              toast.success(`¡Muchas gracias por su compra, su orden es ${item.id}`)
              clearCart()
              e.target.reset()
              navigate("/")
          }).catch(error => {
              toast.error("Su orden no fue generada con exito")
              console.error(error)
          })
          
      })
      
  }else{
      setIsInvalid(true)
  }
  }
  return (
    <div className="formCheckout">
      
      <form onSubmit={consultarFormulario} ref={datosFormulario}>
    
      <label>
      <div className='adviceObligatory'>* Campos obligatorios</div>
    </label>

    
    <label>Nombre *
    <input  type="text" className="idPerson" name="nombre" placeholder="Ingresa tu nombre.." required/>
    <div className='errorMsg'>*</div>
    </label>

    <label >Apellido *
    <input type="text" className="idPerson" name="apellido" placeholder="Ingresa tu apellido.." required/>
    <div className='errorMsg'>*</div>
    </label>


    <label >Dirección *
    <input type="text" className="idPerson" name="direccion" placeholder="Ingresa tu dirección.." required/>
    <div className='errorMsg'>*</div>
    </label>

    <label >Email *
    <input type="email" className="email" name="email" placeholder="Ingresa tu email.." required/>
    <div className='errorMsg'>*</div>
    </label>


    <label >Repita email * 
    <input type="email" className="email" name="email2" placeholder="Ingresa tu email.." required/>
    <div className='errorMsg'>*</div>
    {isInvalid ? <div className='adviceObligatory'>Los email no coinciden</div>: isInvalid}

    </label>

    <label >Celular</label>
    <input type="number" className="idPerson" name="celular" placeholder="Ingresa tu número telefónico.."/>




  
    <input type="submit" className='submitCheckout' value="Submit"/>
    
    </form>
    </div>
  )
}

export default Checkout
