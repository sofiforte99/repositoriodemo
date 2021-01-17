import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.js';
import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail.js';
import Item from './Item.js';

const useStyles = makeStyles({
    saludo: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  });

const ItemListContainer = ( {greeting, products}) => {
    const classes = useStyles()
    const [ items, setItems ] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if(id){
            const category = products.filter(product => product.categoryId == id)
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
        <ItemDetail></ItemDetail>
        <Item/>
        </>
        )
}

export default ItemListContainer
