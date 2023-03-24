import Item from "./Item.js"

export default function ItemList({item}){

 
    
    
    return(
        <div>
        {item.map(item=> (
            <div   
                   key={item.id}>
                    {    console.log(item.id)
}
             <Item class={item.class}
             
                   name={item.name}
                   alt={item.alt}
                   image={item.image}
                   stock={item.stock}
                   category={item.category}
                   
                   />
                   
            </div>
            
        )   
                   
            )}
         
       </div>

    ) 
}