import { createContext, useState } from "react";

    export const CartContext = createContext(0)

    export const CartProvider = ({ children }) => {
        
        const [cart, setCart] = useState([]);

        const isInCart = (id) => {
            return cart.some((e) => e.id === id);
        };
    
        const addItem = (item, amount) => {
                let itemAmount = { ...item, amount };
            if (!isInCart(item.id)) {
               setCart([...cart, itemAmount])
            } else {
                
                console.log(cart)
                const newProducts = cart.map(prod => {
                    if(prod.id === item.id) {
                        const newProduct = {
                            ...prod,
                            amount: prod.amount + amount
                        }
                        return newProduct
                    } else {
                        return prod
                    }
                })
                 console.log(newProducts)
                setCart(newProducts)
            }
        }
    
        return(
            <CartContext.Provider value={{cart, addItem}}>
                {children}
        </CartContext.Provider>
    )
}
 