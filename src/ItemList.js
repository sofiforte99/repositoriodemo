import React, { useEffect, useState } from "react";

const ItemList = (() => {
const [items, setItems] = useState 



    
    useEffect(() => {
        const promesa = new Promise(() => { setTimeout(()=> {
        [
            {id: 1, name: 'jamón y queso' , price: '$ 50', pictureUrl: 'https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-768x1152.jpg?ezimgfmt=ng:webp/ngcb1' },
            {id: 2, name: 'carne' , price: '$ 50', pictureUrl: 'https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-768x1152.jpg?ezimgfmt=ng:webp/ngcb1' },
            {id: 3, name: 'verdura' , price: '$ 50', pictureUrl: 'https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-768x1152.jpg?ezimgfmt=ng:webp/ngcb1' },
            {id: 4, name: 'pollo' , price: '$ 50', pictureUrl: 'https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-768x1152.jpg?ezimgfmt=ng:webp/ngcb1' },
            {id: 5, name: 'humita' , price: '$ 50', pictureUrl: 'https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-768x1152.jpg?ezimgfmt=ng:webp/ngcb1' },
        ]  
    },2000)})
    .then(setItems(resultado)
                 
}, [])
                                           
return (
    <>
    {items.map( (item) => {
         <Item id={item.id} name={item.name} etc... />
    })}
    </>
)
})
    
})

export default ItemList;
