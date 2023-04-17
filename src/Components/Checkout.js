import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { createOrdenCompra,getOrdenCompra,getProducto,updateProducto } from '../Firebase/Firebase.js';
import { Navigate, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext.js';

const Checkout = () => {
  const {getTotalPrice, cart, clearCart} = useContext(CartContext)
  const datosFormulario = React.useRef()
  let navigate = useNavigate()
  const consultarFormulario = (e) => {
      e.preventDefault()
      const datForm = new FormData(datosFormulario.current)
      const cliente = Object.fromEntries(datForm)

      const aux = [...cart]

      aux.forEach(prodCarrito => {
          getProducto(prodCarrito.id).then(prodBDD => {
              if(prodBDD.stock >= prodCarrito.amount) {
                  prodBDD.stock -= prodCarrito.amount
                  updateProducto(prodCarrito.id, prodBDD)

              } else {
                  console.log("Stock no valido")
                  
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
      
  }

  return (
    <div className="formCheckout">
      
      <form onSubmit={consultarFormulario} ref={datosFormulario}>
    <label for="fname">Nombre</label>
    <input type="text" className="idPerson" name="nombre" placeholder="Ingresa tu nombre.."/>

    <label for="lname">Apellido</label>
    <input type="text" className="idPerson" name="apellido" placeholder="Ingresa tu apellido.."/>
   
    <label for="lname">Dirección</label>
    <input type="text" className="idPerson" name="direccion" placeholder="Ingresa tu dirección.."/>

    <label for="lname">Email</label>
    <input type="text" className="idPerson" name="email" placeholder="Ingresa tu email.."/>

    <label for="lname">Celular</label>
    <input type="text" className="idPerson" name="celular" placeholder="Ingresa tu número telefónico.."/>



    <label>Medio de pago</label>
    <select id="country" name="country" placeholder='pick'>
    <option value="" hidden >Seleccione.... </option>
      <option  value="australia">Visa</option>
      <option value="canada">Master</option>
      <option value="usa">PayPal</option>
    </select>
  
    <input type="submit" className='submitCheckout' value="Submit"/>
    
    </form>
    </div>
  )
}

export default Checkout
