
import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail.js';
import { useParams } from 'react-router-dom';
import { firestore } from './firebaseConfig.js';



/*const products = [{
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
*/
function ItemDetailContainer() {
    const [ item, setItem ] = useState()
    const { id } = useParams()

    /*useEffect(() => {
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

    },  [id]);*/

    useEffect(() => {
      const db = firestore
      const collection = db.collection('items') 
      const item = collection.doc(id)
 
      item.get()
       .then( (i) => {
         setItem({ id: i.id, ...i.data()})
       })

       console.log(item)


 
   },  [id]);
   console.log(item)

    return (
        <div className="itemDetailContainer">
            { item ?
            <ItemDetail
             item={item}
             id={item.id}
             nombre={item.nombre}     
             precio={item.precio}
             imagen={item.imagen}
             description={item.description}
             stock={item.stock}
             initial={item.initial}
             />
             :
             <h2>Cargando</h2>             
             }
        </div>
    )
}

export default ItemDetailContainer