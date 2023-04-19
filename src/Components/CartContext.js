import { createContext, useState } from "react";
import { $ } from "jquery";

    export const CartContext = createContext(0)


    export const CartProvider = ({ children }) => {

        const [cart, setCart] = useState([]);

        const [contadorGlobal, setContadorGlobal] = useState(0)
        
        const isInCart = (id) => {
            return cart.find((e) => e.id === id);
        };
    
        const addItem = (item, amount) => {
                let itemAmount = { ...item, amount };
            if (!isInCart(item.id)) {
               setCart([...cart, itemAmount])
            } else {
                
            
                const newProducts = cart.map((prod) => {
                    setContadorGlobal(prod.amount+amount)
                    if(prod.id === item.id && prod.amount + amount <= item.stock) {
                        const newProduct = {
                            ...prod,
                            amount: (prod.amount + amount)
                        }
                        return newProduct
                    } else {
                       
                        return prod
                    }
                })
                
                setCart(newProducts)
            }
        }

        const clearCart = () =>{
           setCart([])
            }
    
    

        const removeItem = (id) =>{ 
            let newCart = cart.filter(itemInCart => itemInCart.id !== id)
            setCart(newCart)
        }
    
        const getTotalPrice = () =>{
            return cart.reduce((prev,act) => prev + act.amount * act.price, 0)
        }

        const getTotalItemCount = () =>{
        
            return cart.reduce((acum,prod)=> acum += (prod.amount),0)
        
        }

        

        
    
         
        return(
            <CartContext.Provider value={{cart, clearCart, removeItem, getTotalPrice, getTotalItemCount, addItem }}>
                {children}
        </CartContext.Provider>
    )
}
 