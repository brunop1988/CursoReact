import { useState } from "react"
import Cartwidget from "./CartWidget.js"
import Item from "./Item.js"

export default function ItemList({item}){

    return(
        <div>
        {item.map(item=> (
            <div   
                   key={item.id}>
             <Item item={item}
            
                   />
            
                   
            </div>
            
        )   
                   
            )}
         
       </div>

    ) 
}