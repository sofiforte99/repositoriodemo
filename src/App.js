import { useState, useEffect } from 'react';
import './App.css';
import './index.js';
import ItemListContainer from './ItemListContainer.js';
import NavBar from './NavBar.js';
import empanada from './empanada.jpg';
import empanada2 from './empanada2.jpg';
import empanada3 from './empanada3.jpg';
import ItemDetailContainer from './ItemDetailContainer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


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
  nombre: "Empanada3",
  precio: "60",
  imagen: empanada3,
  description: "Empanada de humita",
  stock: 45,
  initial: 12,
  categoryId: "humita",
}
]

function App() {

  const [ items, setItems ] = useState([])

  useEffect(() => {
    const promesa = new Promise((resolve, reject)=>{
      setTimeout(function(){
        resolve(products); 
      }, 2000);
    }
    )
    promesa.then( result => setItems(result)) 
    promesa.catch( err => console.log("Algo salio mal")) 

  }, []);
  return (
    <>
   <div className="app">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Buen Día" products= {items} />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer greeting="Buen día" products={items}
 />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer greeting="Buen día" products={items} />
          </Route>
      </Switch>
      </BrowserRouter>
    </div>
   </>
  );
}



export default App;
