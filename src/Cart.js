import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import {CartContext} from './CartContext.js'
import { Link } from 'react-router-dom';
import CartItem from './CartItem.js';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {firestore} from './firebaseConfig.js';
import firebase from 'firebase/app';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));


function Cart() {
    const { cart, clearProduct, total } = useContext(CartContext)
    const [openPay, setOpenPay] = useState(false)
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")

    const classes = useStyles();

    function enviarOrden(){
        const db = firestore
        const orders = db.collection ('orders')
        
        const order = {
            cliente: {nombre:nombre, telefono:telefono, email: email},
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()), 
            total: total, 
        }

        orders.add(order)
        .then(({id}) => alert("Escribir id de la compra" + id))
        .catch ((error) => console.log (error))
    }



    return (
        <div className="cart">
            { cart.length > 0 ? (
            <h1>Comprar</h1>
            )    
            :
            ( <>
            <h1>Falta elegir tus productos</h1>
                <Link to={"/"}>
                <Button onClick={clearProduct} variant="contained" color="primary">
                Ir a Productos
                </Button>
            </Link>
            </>)}
            <div className="cartItems">
                { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
                id={product.id} nombre={product.name} imagen={product.imagen} precio={product.precio} 
                amount={product.amount} />)}
            </div>

            { cart.length > 0 &&
            <>
            <h2>${total}</h2>
            <div className="cartItems__buttons">
                <Button onClick={clearProduct} variant="contained" color="primary">
                    Vaciar carrito
                </Button>
                <Button onClick={() => {setOpenPay(true)}} variant="contained" color="primary">
                 Finalizar Compra 
                </Button>
               
            </div>
            </>}


            { openPay && 
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Nombre" value={nombre} 
            onChange={(e) => setNombre(e.target.value)} />
            <TextField id="standard-basic" label="Telefono" value={telefono} 
            onChange={(e) => setTelefono(e.target.value)} />
            <TextField id="standard-basic" label="Email" value={email} 
            onChange={(e) => setEmail(e.target.value)} />
            <Button onClick={enviarOrden} variant="contained" color="primary">
                    Listo!
                </Button>
          </form>}

        </div>
    )
}

export default Cart