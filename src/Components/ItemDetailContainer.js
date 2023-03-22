import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import arrayProductos from './json/arrayProductos.json'
import ItemDetail from './ItemDetail.js'
const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            console.log(id);
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id  === parseInt(id)))
            }, 1000)
        }, [])

        promesa.then((data) => {
            setItem(data)
        })

    }, [id])


    return(
        <div>
        <ItemDetail item={item} />
        </div> 

        
    )

}
export default ItemDetailContainer
