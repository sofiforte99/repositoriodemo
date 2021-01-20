import React, {useState, useContext, useEffect, createContext} from "react";

const products = [{
    id: 1,
    nombre: "Empanada1",
    precio: "75",
    imagen: empanada,
    description: "Empanada de Carne",
    stock: 15,
    initial: 1,
    categoryId: "carne",
  },{
    id: 2,
    nombre: "Empanada2",
    precio: "50",
    imagen: empanada2,
    description: "Empanada de Verdura",
    stock: 25,
    initial: 2,
    categoryId: "verdura",
  },{
    id: 3,
    nombre: "Empanada3",
    precio: "60",
    imagen: empanada3 ,
    description: "Empanada de humita",
    stock: 45,
    initial: 12,
    categoryId: "humita",
  }
  ]
  

const contexto = createContext ({products}) ;
const {Consumer, Provider} = contexto;

const productProvider = ({children}) => {
    const [products, setProducts] = useState(0);

    const addProduct = (id) => {
        let actualCart = cart.map(product => product.id === id ? product.quantity += value : product)
        setCart(actualCart)
    }

    const removeProduct = (productId) => {
        console.log ("Borrar producto");
        setProducts(product.filter(({ id }) => id !== productId));
        return (
            <li>
                {producto.nombre}
                <button onClick = {borrarProducto}>Borrar este producto</button>
            </li>
        )
    }

    const clearProduct = () =>{
        console.log ("Borrar productos");
        setProducts([]);
        return (
            <li>
              {producto.nombre}
              <button onClick={borrarProductos}>Borrar productos</button>
            </li>)
    };

    const isInCart = (id) => {

    }

    return (
        <Provider value = {{product, removeProduct, addProduct, clearProduct, isInCart}}>
            {children}
        </Provider>
    );
};
