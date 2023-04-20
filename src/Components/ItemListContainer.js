import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList.js'
import { getProductos } from '../Firebase/Firebase.js'
import { CartContext } from './CartContext.js'
import { getValue } from '@testing-library/user-event/dist/utils/index.js'
export default function ItemListContainer(props){


    const [item, setItem] = useState([])
    const { categoryId } = useParams ()
    const [loading, setLoading] = useState(false)
    


   

    useEffect(()=> {
                setLoading(true)
                 if(categoryId){
                    getProductos().then(products => {
                        const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.category === categoryId)
                        setItem(productsList)
                        setLoading(false)})
                 }else{
                    getProductos().then(products => {
                        const productsList= products.filter(prod => prod.stock > 0)
                    setItem(productsList)
                    setLoading(false)
                    })
                 }
     },[categoryId])


  
        return(
            <div>
               { loading ? <h1 className='loading'><div className='color'></div></h1>: 
            <><h1 className="saludo">{props.greeting}</h1><ItemList item={item} /></>}
            </div>
            )

        }
