import React, { useContext } from 'react';
import { CartContext } from './CartContext.js'
import { Button } from '@material-ui/core';

function CartItem( { id, nombre, imagen, precio, amount }) {
    const { removeProduct } = useContext(CartContext)

    return (
        <div className="cartItem">
            <div className="cartItem__title">
                <h3>{nombre}</h3>
            </div>
            <div className="cartItem__image">
                <img src={imagen} alt={nombre} />
            </div>
            <div className="cartItem__price">
                <h3>${precio}</h3>
            </div>
            <div className="cartItem__amount">
                <h3>{amount}</h3>
            </div>
            <div className="cartItem__parcial">
                <h3>${amount*precio}</h3>
            </div>
            <Button onClick={ () => removeProduct(id)} variant="contained" color="primary">
                Eliminar
            </Button>
        </div>
    )
}

export default CartItem