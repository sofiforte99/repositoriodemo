import React, { useEffect, useState } from "react";

const ItemList = (() => {
setTimeout(()=> {
    useEffect(() => {
    const [users, setUsers] = useState (
        [
            {id: 1, name: 'jamón y queso' , price: '$ 50', pictureUrl: 'https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-768x1152.jpg?ezimgfmt=ng:webp/ngcb1' },
            {id: 2, name: 'carne' , price: '$ 50', pictureUrl: 'https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-768x1152.jpg?ezimgfmt=ng:webp/ngcb1' },
            {id: 3, name: 'verdura' , price: '$ 50', pictureUrl: 'https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-768x1152.jpg?ezimgfmt=ng:webp/ngcb1' },
            {id: 4, name: 'pollo' , price: '$ 50', pictureUrl: 'https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-768x1152.jpg?ezimgfmt=ng:webp/ngcb1' },
            {id: 5, name: 'humita' , price: '$ 50', pictureUrl: 'https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-768x1152.jpg?ezimgfmt=ng:webp/ngcb1' },

        ]
        
    )
    return (
        <>
        <ul>
        {users.map (u => <li key ={u.id}>{u.name}{u.price}{u.pictureUrl}</li>)}
        </ul>
        </>
    )
    })
})
    
}, 2000)

export default ItemList;