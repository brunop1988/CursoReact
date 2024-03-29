import { getFirestore ,addDoc, collection, getDocs, getDoc, doc, updateDoc ,deleteDoc } from "firebase/firestore"
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCvAvfZN7CyXZo4wNBLnQgtpguC4IJhono",
  authDomain: "ecommerce-bp-2d348.firebaseapp.com",
  projectId: "ecommerce-bp-2d348",
  storageBucket: "ecommerce-bp-2d348.appspot.com",
  messagingSenderId: "62289680960",
  appId: "1:62289680960:web:f0250a945a0561f1a0dda5",
  measurementId: "G-6D83YVWYNP"
};

const app = initializeApp(firebaseConfig)
//  const analytics = getAnalytics(app)
export const db = getFirestore(app)

const cargarBDD = async () => {
  const promise = await fetch('./json/arrayProductos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
      await addDoc(collection(db,"items"), { 
          nombre: prod.nombre,
          idCategoria: prod.idCategoria,
          stock: prod.stock,
          precio: prod.precio,
          img: prod.img
      })
  })
}

const getProductos = async() => {
  const productos = await getDocs(collection(db, "items"))
  const items = productos.docs.map(prod => {
      return {...prod.data(), id: prod.id}
  })
  return items
}
const getUser = async(id) => {
  const user = await getDocs(collection(db, "users", id))
  const person = {...user.data(), id: user.id}
  
  return person
}



const getProducto =  async (id) => {
  const producto = await getDoc(doc(db, "items", id))
  const item = {...producto.data(), id: producto.id}
  return item
}
const updateProducto = async (id, info) => {
  const estado = await updateDoc(doc(db,"items", id), info)
  return estado
}

const deleteProducto = async(id) =>{
  const estado = await deleteDoc(doc(db, "items", id))
  return estado
}


const createOrdenCompra = async (cliente, cart, preTotal, fecha ) => {
  const productosComprados = cart.map(prod =>({
      Producto :prod.name,
      Precio :prod.price,
      Cantidad :prod.amount,
      Precio_total:prod.price*prod.amount}))

  const ordenCompra = await addDoc(collection(db, "orders"),{
      Nombre_cliente: cliente.nombre,
      Email: cliente.email,
      Dirección: cliente.direccion,
      Celular: cliente.celular,
      Fecha: fecha,
      Precio_Total_Compra: preTotal,
      Productos: {productosComprados}
                
    })

  return ordenCompra
}

const getOrdenCompra =  async (id) => {
  const ordenCompra = await getDoc(doc(db, "orders", id))
  const item = {...ordenCompra.data(), id: ordenCompra.id}
  return item
}

const createUser = async (client, date ) => {
  

  const ordenCompra = await addDoc(collection(db, "users"),{
      Nombre_cliente: client.nombre,
      Email: client.email,
      Dirección: client.address,
      Celular: client.cellphone,
      Fecha: date,
    
                
    })

  return ordenCompra
}

export { getProducto, getProductos, updateProducto , createOrdenCompra , getOrdenCompra, createUser, getUser}