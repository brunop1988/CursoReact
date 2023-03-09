 import './NavBar.css'
  import './Productos.css'
  import Navbar from '../src/Components/NavBar.js'
  import Gretting from './Components/ItemListContainer.js'
  import Productos from './Components/Productos.js'
  
 
function App() {
  return (
    <div className="App">

    <Navbar/>
    <Gretting greeting="TuTecnoStore"/>
    <Productos clase="producto1" imagen="img/laptop1.png" alt="laptop1" nombre="Laptop hp i7 8gb" />
    <Productos clase="producto2" imagen="img/ipad.png" alt="ipad" nombre="iPad 10.2 pulgadas 64gb"/>
    <Productos clase="producto3" imagen="img/asus.png" alt="asus" nombre="Tablet Asus Vivobook"/>
    <Productos clase="producto4" imagen="img/epson.png" alt="epson" nombre="Impresora Epson multifunción ecotank"/>
    <Productos clase="producto5" imagen="img/brother.png" alt="brother" nombre="Multifuncional Brother DCPT520W Inyección"/>
    <Productos clase="producto6" imagen="img/msi.png" alt="pc" nombre="Laptop Gamer MSI Bravo AMD Ryzen 7 "/>


    </div>
    

       

  )
}

export default App
