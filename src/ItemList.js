import React from "react";
import Item from './Item.js'; 

function ItemList( { products }) {

  return (
      <div className="itemList">
          
          { products.map( product => <Item key={product.id} id={product.id} 
          nombre={product.nombre} imagen={product.imagen} />)
          }
      </div>
  )
}

export default ItemList
