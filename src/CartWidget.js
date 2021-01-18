import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const CartWidget = () => {

    return (
        <div container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' 
           }}>
            <>
            <ShoppingCartIcon />
            </>
        </div>
    )
}

export default CartWidget
