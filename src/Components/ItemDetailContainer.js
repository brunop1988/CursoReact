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
                resolve(arrayProductos.filter(item => item.id  === parseInt(id)))
            }, 1000)
        }, [])

        promesa.then((data) => {
            setItem(data)
        })

    }, [id])


    return(
        <div>
        <ItemDetail id={item.id}
                    name={item.name}
                    description={item.description}
                    stock={item.stock}
                    image={item.image} />
        </div> 

        
    )

}
export default ItemDetailContainer
