import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js';
import React, { useState, useEffect } from 'react';

const useStyles = makeStyles({
    saludo: {
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',
      height: 48,
      padding: '10px 30px',
      fontFamily: 'monospace',
      marginTop: '0px',
      margin: '15px',

    },
  });

const ItemListContainer = ( {greeting, products}) => {
    const classes = useStyles()
    const [ items, setItems ] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if(id){
            const category = products.filter(product => product.categoryId === id)
            setItems(category)
        }
        else{
            setItems(products)
        }

    }, [id, products])
    return (
        <>
      <div className="itemListContainer">
        <div className = {classes.saludo}>
           <h2>{greeting}</h2>
        </div>
            {products.length > 0 ? <ItemList products={items} /> : <h2>Cargando</h2>}           
        </div>
        </>
        )
}

export default ItemListContainer
