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

    const addProduct = (id, value) => {
        let actualCart = cart.map(product => product.id === id ? product.quantity += value : product)
        setCart(actualCart)
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