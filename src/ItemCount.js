
import React, {useState} from "react"; 
const ItemCount = ({stock}) =>
{
    const [contador, setContador] = useState(1)
    const [stock] = useState(10)
   
    const aumentarContador = () =>
    {
        if (contador<=stock)
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
        if (contador>1)
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

