import React, {useState} from "react";

function ItemDetail ({item}) {
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