import React, {useState, useEffect} from "react";

export const CartContext = React.createContext();

const CartProvider = ({children}) => {

    const [cart, setCart] = useState ([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState ();

    useEffect(() => {
        var t= 0

        const totals = cart.map (p => p.precio * p.amount)

        totals.map (p=>t = t+p)

        setTotal (t)

        const cartQuantity = cart.length
        
        setQuantity (cartQuantity)
    }, [cart]
    )

    function addProduct (product, contador, id) {
         
        if (isInCart(id)){
            const oldProduct = cart.find(p => p.id === id)
            const newQuantity = oldProduct.amount + contador           
            const newProduct = { id: oldProduct.id, nombre: oldProduct.nombre, imagen: oldProduct.imagen, precio: oldProduct.precio, amount: newQuantity}
            const cartWithoutOld = cart.filter(product => product.id =! id)
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCart(cartWithNew)            
        } else {
            const newItem = { id: product.id, nombre: product.nombre, imagen: product.imagen, precio: product.precio, amount: contador }
            setCart([...cart, newItem]) 
        }
    }
    const removeProduct = (productId) => {
        console.log ("Borrar producto");
        setCart(cart.filter(({ id }) => id !== productId));
       
    }

    const clearProduct = () =>{
        console.log ("Borrar productos");
        setCart([]);
        setQuantity(0);
    };

    const isInCart = (id) => {

        const item = cart.find (p=> p.id === id)

        if (item === undefined){
            return false
        }

        else {
            return true
        }
    }

    return (
        <CartContext.Provider value = {{cart, quantity, total, removeProduct, addProduct, clearProduct, isInCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;