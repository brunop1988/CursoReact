  import './NavBar.css'
  import './Productos.css'
  import Navbar from '../src/Components/NavBar.js'
  import Gretting from './Components/ItemListContainer.js'

import Productos from './Components/Productos.js'
 
function App() {
  return (
    <div className="App">

    <Navbar/>
    <Gretting greeting="Greetings Earthlings"/>
    <Productos clase="producto1" imagen="img/laptop1.png" alt="laptop1" nombre="laptop hp I7 8gb SSD 256"/>
    <Productos clase="producto2" imagen="img/laptop1.png" alt="laptop2" nombre="chumingalapocha"/>
    <Productos clase="producto3" imagen="img/laptop1.png" alt="laptop3" nombre="agarreynosuelte"/>
    <Productos clase="producto4" imagen="img/laptop1.png" alt="laptop1" nombre="laptop hp I7 8gb SSD 256"/>
    <Productos clase="producto5" imagen="img/laptop1.png" alt="laptop2" nombre="chumingalapocha"/>
    <Productos clase="producto6" imagen="img/laptop1.png" alt="laptop3" nombre="agarreynosuelte"/>

    </div>
    

       

  )
}

export default App
