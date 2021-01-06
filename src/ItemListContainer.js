import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ItemCount from './ItemCount';

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

const ItemListContainer = ( {greeting}) => {
    const classes = useStyles()
    return (
        <>
        <div className = {classes.saludo}>
           <h2>{greeting}</h2>
        </div>
        <ItemCount/>
        </>
        )
}

export default ItemListContainer
