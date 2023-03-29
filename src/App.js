 import './NavBar.css'
  import './Productos.css'
  import Navbar from '../src/Components/NavBar.js'
import { BrowserRouter } from 'react-router-dom'

import { CartProvider } from './Components/CartContext.js'
import { Rutas } from './Components/Rutas.js'
 
function App() {
  return (
    <div className="App">

<BrowserRouter>
<CartProvider>
    <Navbar/>
     <Rutas/>
  </CartProvider>
  </BrowserRouter>

       

    </div>
    

       

  )
}

export default App
