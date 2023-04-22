import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db, getProducto } from "../Firebase/Firebase.js"
import ItemDetail from './ItemDetail.js'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

useEffect(()=>{
    setLoading(true)
     getProducto(id).then(prod=> setItem(prod))
    setLoading(false)
},[id] )    


    
    
    return(
        <div>
            { loading ? <h1 className="loading"><span className="color"></span></h1>:
      <ItemDetail item={item} />}
        </div> 

        
    )

}
export default ItemDetailContainer
