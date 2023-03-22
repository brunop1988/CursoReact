 import './NavBar.css'
  import './Productos.css'
  import Navbar from '../src/Components/NavBar.js'
import ItemListContainer from './Components/ItemListContainer.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './Components/Error404.js';
import ItemDetailContainer from './Components/ItemDetailContainer.js'

 
function App() {
  return (
    <div className="App">

<BrowserRouter>
    <Navbar/>
  <Routes>
      <Route path="/" exact element={<ItemListContainer greeting="TuTecnoStore"/>}/>
      <Route path="/category/:id" exact element={<ItemListContainer/>}/>
      <Route path="/item/:id" exact element={<ItemDetailContainer />}/>
      <Route path="*" exact element={<Error404/>}/>
  </Routes>
  </BrowserRouter>

       

    </div>
    

       

  )
}

export default App
