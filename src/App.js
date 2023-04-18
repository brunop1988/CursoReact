import './Estilos/Productos.css'
import './Estilos/NavBar.css'
import './Estilos/SalesList.css'
import './Estilos/Checkout.css'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../src/Components/NavBar.js'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './Components/CartContext.js'
import { Rutas } from './Components/Rutas.js'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
     
  
    <div className="App" >

<CartProvider>

  <BrowserRouter>
 
    <Navbar/>
    
     <Rutas/>
     <ToastContainer/>
  </BrowserRouter>
</CartProvider>

       

    </div>
    

       

  )
}

export default App
