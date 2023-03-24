import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import arrayProductos from './json/arrayProductos.json'
import ItemDetail from './ItemDetail.js'
const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams()
    
    const promesa= (id) => {
        return new Promise((resolve) => {
            const productoFiltrado  = arrayProductos.find(p => p.id === parseInt(id))
            setTimeout(() => {
                resolve(productoFiltrado)
            }, 1000)
        })
      }


    useEffect(() => {
            promesa(id).then((data) => {
            setItem(data)
        })

    }, [id])
    {console.log(item)}
    return(
        <div>
      <ItemDetail  item={item} />{console.log(item)}
        </div> 

        
    )

}
export default ItemDetailContainer
