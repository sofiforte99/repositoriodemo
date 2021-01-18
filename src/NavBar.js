import React from "react"
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';

const categories = [{
    categoryId: "carne",
    nombre: "empanada1",
},
{
    categoryId: "verdura",
    nombre: "empanada2"
},{
    categoryId: "humita",
    nombre: "empanada3"
}]


function NavBar() {
    return (
        <>
        <header>
            <h1>Tienda de Empanadas</h1>
        <nav>           
                <p>Home</p>
                <p>Productos</p>
                <p>Mi Cuenta</p> 
        </nav>
            <div className="navbar__links">
                    { categories.map( category => <Link to={`/category/${category.categoryId}`}>
                    <p>{category.nombre}</p>
                    </Link>)}
                <p>nosotros</p>
                <p>contacto</p>
                <CartWidget />
            </div>
        </header>

    </>
    )
}


export default NavBar;