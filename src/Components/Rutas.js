import Error404 from './Error404.js';
import ItemDetailContainer from './ItemDetailContainer.js'
import { Route , Routes } from 'react-router-dom'; 
import ItemListContainer from './ItemListContainer.js'
import SalesList from './SalesList.js'
import Checkout from './Checkout.js';


export const Rutas = () => {
return(
<Routes>
      <Route path="/" exact element={<ItemListContainer greeting="TuTecnoStore"/>}/>
      <Route path="/category/:categoryId" exact element={<ItemListContainer/>}/>
      <Route path="/item/:id" exact element={<ItemDetailContainer />}/>
      <Route path="*" exact element={<Error404/>}/>
      <Route path="/listaCarrito" exact element={<SalesList/>}/>
      <Route path="/checkout" exact element={<Checkout/>}/>

</Routes>
)
}