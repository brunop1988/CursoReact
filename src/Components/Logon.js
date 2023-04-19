import React from 'react'
import { toast } from 'react-toastify';
import { getUser, createUser } from '../Firebase/Firebase.js';
import {  useNavigate } from 'react-router-dom';


const Logon = () => {
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const client = Object.fromEntries(datForm)
  
  
            getUser(client.id).then(usersBDD => {
                if(usersBDD.id === client.document) {
                    toast.error("Su usuario no fue creado con exito")

  
                } else {
                    createUser(client , new Date().toISOString()).then(user => {

                        toast.success(`¡Muchas gracias por su registro ${user.id}`)
                        
                        e.target.reset()
                        navigate("")
                    
                })
            }})
        
    
  
        
          
        
    }
  
    return (
      <div className="formCheckout">
        
        <form onSubmit={consultarFormulario} ref={datosFormulario}>
      <label >Nombre</label>
      <input type="text" className="idPerson" name="name" placeholder="Ingresa tu nombre.."/>
  
      <label >Apellido</label>
      <input type="text" className="idPerson" name="lastname" placeholder="Ingresa tu apellido.."/>
     
      <label >Dirección</label>
      <input type="text" className="idPerson" name="address" placeholder="Ingresa tu dirección.."/>
  
      <label >Email</label>
      <input type="text" className="idPerson" name="email" placeholder="Ingresa tu email.."/>
  
      <label >Documento de identidad</label>
      <input type="number" className="idPerson" name="document" placeholder="Ingresa tu número documento de identidad.."/>
        
      <label >Contraseña</label>
      <input type="password" className="idPerson" name="password" placeholder="Selecciona una contraseña de 4-8 dígitos.."/>
        
      
     <label >Repita Contraseña</label>
      <input type="password" className="idPerson" name="password2" placeholder="Repite la contraseña elegida.."/>
          
  
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
export default Logon