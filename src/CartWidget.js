import React, { useContext } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { CartContext } from './CartContext';


const CartWidget = () => {
    const { quantity } = useContext(CartContext)
    
    return (
        <div container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' 
           }}>

        <div className="cartWidget">
            { quantity > 0 && 
            <>
            <ShoppingCartIcon />
            <h4>{quantity}</h4>
            </>} </div>
            
        </div>
    )
}

export default CartWidget
