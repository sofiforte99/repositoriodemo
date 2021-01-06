import React, { useEffect, useState } from "react";
import Item from './Item.js'; 

const items = [{
    nombre: "Carne",
    precio: "10"
  },{
    nombre: "Verdura",
    precio: "30"
  },{
    nombre: "Humita",
    precio: "40"
  }
  ]


  export default function ItemList() {
    const [ items, setItems ] = useState([])
  
    useEffect(() => {
      const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
          resolve(items); 
        }, 2000);
      }
      )
      .then(result => setItems(result)) 
      .catch(err => console.log("Algo salio mal")) 
  
    },  [items]);
  
    return (
      <>
      {items.map(item => <Item name={item.name} precio={item.precio} /> )} 
      </>
    );
  }