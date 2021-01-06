import React from "react"

const Item = () => {

    const [users, setUsers] = useState (
        [
            {id: 1, name: 'empanada' , price: '$ 50', pictureUrl: 'https://chipabythedozen.com/wp-content/uploads/2019/08/empanadas-de-pollo-768x1152.jpg?ezimgfmt=ng:webp/ngcb1' },
        ]
    )

    return <ul>
        {users.map (u => <li key ={u.id}>{u.name}{u.price}{u.pictureUrl}</li>)}
    </ul>
}

export default Item; 