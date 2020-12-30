import React from "react"
import CartWidget from './CartWidget.js';

const NavBar = () => {
    
    return(
        <>
        <header>
            <h1>Tienda de Empanadas</h1>
        </header>
        <nav>
            <p>Home</p>
            <p>Productos</p>
            <p>Mi Cuenta</p>
        </nav>
        <CartWidget/>
        </>
    ) 
}


export default NavBar;