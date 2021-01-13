import React from "react"
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';


const products = [{
    categoryId: "carne",
    nombre: "empanada1"
},
{
    categoryId: "verdura",
    nombre: "emapanada2"
},{
    categoryId: "humita",
    nombre: "empanada3"
}]

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
                {products.map( product => <Link to={`/product/${product.productId}`}>
                    <p>{product.nombre}</p>
                    </Link>)}
                <p>Sobre nosotros</p>
                <p>CONTACTO</p>
            </div>
        <CartWidget/>
        </>
    ) 
}


export default NavBar;