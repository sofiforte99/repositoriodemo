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
            <div>
                { categories.map( category => <Link to={`/category/${category.categoryId}`}>
                    <p>{category.name}</p>
                    </Link>)}
                <p>Sobre nosotros</p>
                <p>CONTACTO</p>
            </div>
        <CartWidget/>
        </>
    ) 
}


export default NavBar;