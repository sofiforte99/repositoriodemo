import { Button } from '@material-ui/core';
import React, { useContext } from 'react'
import {CartContext} from './CartContext.js'
import { Link } from 'react-router-dom';
import CartItem from './CartItem.js';


function Cart() {
    const { cart, clearProduct, total } = useContext(CartContext)

    return (
        <div className="cart">
            { cart.length > 0 ? (
            <h1>Comprar</h1>
            )    
            :
            ( <>
            <h1>Falta elegir tus productos</h1>
                <Link to={"/"}>
                <Button onClick={clearProduct} variant="contained" color="primary">
                Ir a Productos
                </Button>
            </Link>
            </>)}
            <div className="cartItems">
                { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
                id={product.id} nombre={product.name} imagen={product.imagen} precio={product.precio} 
                amount={product.amount} />)}
            </div>

            { cart.length > 0 &&
            <>
            <h2>${total}</h2>
            <div className="cartItems__buttons">
                <Button onClick={clearProduct} variant="contained" color="primary">
                    Vaciar carrito
                </Button>
                <Button onClick={() => {console.log(cart)}} variant="contained" color="primary">
                    Finalizar compra
                </Button>
            </div>
            </>}
        </div>
    )
}

export default Cart