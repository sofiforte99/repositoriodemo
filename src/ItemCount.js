
import React, {useState} from "react"; 
const ItemCount = () =>
{
    const [contador, setContador] = useState(1)
    const [stock] = useState(10)
    const [initial] = useState(1)
    const aumentarContador = () =>
    {
        if (contador<stock)
        {
        setContador(contador + 1)
        }
    }

    const resetearContador = () =>
    {
        setContador(0)
    }

    const restarContador = () =>
    {
        if (contador>initial)
        {
        setContador(contador - 1)
        }
    }


    return(
        <>
        <p>El contador va: {contador}</p>
        <button onClick = {aumentarContador}> + </button>
        <button onClick = {resetearContador}>Resetear</button>
        <button onClick = {restarContador}> - </button>
        </>
    )
}


export default ItemCount;

