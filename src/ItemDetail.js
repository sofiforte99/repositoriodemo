import React, {useState} from "react";
import ItemCount from "./ItemCount.js";

function ItemDetail ({titulo, descripcion, precio, image, initial, stock}) {
    return <>
    <p>{titulo}</p>
    <p>{descripcion}</p>
    <p>{precio}</p>
    <p>{image}</p> 
    <div>
    <ItemCount initial={initial} stock={stock} />
    </div>
    </>
}

export default ItemDetail;