import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList.js'
import arrayProductos from '../Components/json/arrayProductos.json'

export default function ItemListContainer(props){


    const [item, setItem] = useState([])
    const {id} = useParams ()

    useEffect(() => {
        const promesa =  new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos)
        }, 1000)
    })
    

        promesa.then((data)=> {
            setItem(data)
        })

    },[id])

  
        return(
            <div>
            
            <h1 className="saludo">{props.greeting}</h1>
            
            <ItemList item={item}/>
            </div>
            )

        }