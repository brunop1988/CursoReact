import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, getDoc , doc } from "firebase/firestore"
import { db } from "../Firebase/Firebase.js"
import ItemDetail from './ItemDetail.js'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

useEffect(()=>{
    setLoading(true)
    const queryDB = getFirestore()
    const queryDoc = doc(queryDB, 'items', id)
    getDoc(queryDoc)
    .then(res=> setItem({id: res.id, ...res.data()})).finally(()=> setLoading(false))
},[id] )    




    /*
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
    

   */
    
    
    return(
        <div>
            { loading ? <h1 className="loading"><span className="color"></span></h1>:
      <ItemDetail item={item} />}
        </div> 

        
    )

}
export default ItemDetailContainer
