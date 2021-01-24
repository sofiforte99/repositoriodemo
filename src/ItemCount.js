import React, { useState, useContext } from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';



function ItemCount({ item, aumentarContador, restarContador, id, agregarAlCarrito, contador}) {
    const [ open, setOpen ] = useState(false);
    const { addProduct} = useContext(CartContext)
    function agregarAlCarrito(item, contador, id){
        addProduct(item, contador, id);
        setOpen(true)
    }
    
    return (
        <div className="itemCount">
            <div className="itemCount__counter">
                <Button variant="contained" onClick={restarContador}>-</Button>
                    <h3>{contador}</h3>
                <Button variant="contained" onClick={aumentarContador}>+</Button>
            </div>
            { !open ? (<div className="itemCount__agregar">
                <Button variant="contained" color="primary" onClick={ () => agregarAlCarrito(item, contador, id)}>
                  <h3>Agregar al <ShoppingCartIcon/> </h3>
                </Button>
            </div>) : 
            (<Link to="/cart"><Button variant="contained" color="primary" >
            <h3>Terminar la compra</h3>
          </Button></Link>) }
            
        </div>
    )
}

export default ItemCount;