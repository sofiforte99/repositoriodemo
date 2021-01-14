import React, {useState} from "react";
import ItemCount from "./ItemCount.js";

function ItemDetail ({titulo, descripcion, precio, image, initial, stock}) {
    return <>
    <p>{titulo}</p>
    <p>{descripcion}</p>
    <p>{precio}</p>
    <p>{image}</p> 
    <ItemCount initial={initial} stock={stock} />
        </>
}

export default ItemDetail;