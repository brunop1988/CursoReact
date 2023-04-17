import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList.js'
import { getDocs , collection, getFirestore , where , query} from 'firebase/firestore'

export default function ItemListContainer(props){


    const [item, setItem] = useState([])
    const { categoryId } = useParams ()
    const [loading, setLoading] = useState(false)
    



    useEffect(()=> {
                setLoading(true)
                 const queryDb = getFirestore()
                 const queryCollection = collection(queryDb, 'items')
                 if(categoryId){
               const queryFilter = query(queryCollection, where('category','==', categoryId))
                    getDocs(queryFilter)    
                    .then(res=>setItem(res.docs.map(prod=>({id: prod.id, ...prod.data()}))))
                    .finally(()=> setLoading(false))
                 }else{
                    getDocs(queryCollection)
                    .then(res=>setItem(res.docs.map(prod=>({id: prod.id, ...prod.data()}))))
                    .finally(()=> setLoading(false))

                 }
     },[categoryId])


  /*  useEffect(() => {
        const promesa =  new Promise((resolve)=> {
        setTimeout(()=> {

            resolve(id ? arrayProductos.filter(item => item.category === id) : arrayProductos)
        }, 4000)
    
    })
    

        promesa.then((data)=> {
            setItem(data)
        })


    },[id])

     */
   
        return(
            <div>
               { loading ? <h1 className='loading'><div className='color'></div></h1>: 
            <><h1 className="saludo">{props.greeting}</h1><ItemList item={item} /></>}
            </div>
            )

        }