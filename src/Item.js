import React from "react"

const Item = ({id, name, price, pictureUrl}) => {

    return (
   <>
    <ul>
        <li> {id} {name} {price} {pictureUrl} </li>
    </ul>
    </>
    )

}

export default Item; 