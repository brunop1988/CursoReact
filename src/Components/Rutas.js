import Error404 from './Error404.js';
import ItemDetailContainer from './ItemDetailContainer.js'
import { Route , Routes } from 'react-router-dom'; 
import ItemListContainer from './ItemListContainer.js'


export const Rutas = () => {
return(
<Routes>
      <Route path="/" exact element={<ItemListContainer greeting="TuTecnoStore"/>}/>
      <Route path="/category/:id" exact element={<ItemListContainer/>}/>
      <Route path="/item/:id" exact element={<ItemDetailContainer />}/>
      <Route path="*" exact element={<Error404/>}/>
</Routes>
)
}