
import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail.js';
import empanada from './empanada.jpg';
import empanada2 from './empanada2.jpg';
import empanada3 from './empanada3.jpg';
import { useParams } from 'react-router-dom';

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
  nombre: "Empanada de humita",
  precio: "60",
  imagen: empanada3,
  description: "Empanada de humita",
  stock: 45,
  initial: 12,
  categoryId: "humita",
}
]

function ItemDetailContainer() {
    const [ item, setItem ] = useState()
    const { id } = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, reject)=>{
        setTimeout(function(){
            const i = products.find(product => product.id == id)
            console.log(i)
            resolve(i); 
        }, 2000);
        }
        )
        promesa.then(result => setItem(result)) 
        promesa.catch(err => console.log("Algo salio mal")) 

    },  [id]);

    return (
        <div className="itemDetailContainer">
            { item ?
            <ItemDetail
             id={item.id}
             name={item.nombre}     
             price={item.precio}
             image={item.empanada}
             description={item.description}
             stock={item.stock}
             initial={item.initial}
             />
             :
             <h2>Cargando</h2>}
        </div>
    )
}

export default ItemDetailContainer