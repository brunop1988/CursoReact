 import './NavBar.css'
  import './Productos.css'
  import Navbar from '../src/Components/NavBar.js'
  import Productos from './Components/Productos.js'  
import ItemListContainer from './Components/ItemListContainer.js'

 
function App() {
  return (
    <div className="App">

      <Navbar/>

      <ItemListContainer />
      <Productos clase="producto1" imagen="img/laptop1.png" alt="laptop1" nombre="Laptop hp i7 8gb" stock="2" />
      <Productos clase="producto2" imagen="img/ipad.png" alt="ipad" nombre="iPad 10.2 pulgadas 64gb" stock="2"/>
      <Productos clase="producto3" imagen="img/asus.png" alt="asus" nombre="Tablet Asus Vivobook" stock="2"/>
      <Productos clase="producto4" imagen="img/epson.png" alt="epson" nombre="Impresora Epson multifunción ecotank" stock="4"/>
      <Productos clase="producto5" imagen="img/brother.png" alt="brother" nombre="Multifuncional Brother DCPT520W Inyección" stock="2"/>
      <Productos clase="producto6" imagen="img/msi.png" alt="pc" nombre="Laptop Gamer MSI Bravo AMD Ryzen 7 " stock="2"/>


    </div>
    

       

  )
}

export default App
