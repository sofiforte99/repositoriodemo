import React , {useState} from "react";
import './App.css';
import './index.js';
import NavBar from './NavBar.js';
import ItemListContainer from './ItemListContainer.js';



function App() {

  const [contador, setContador] = useState (0)

  const aumentarContador = () =>
  {
    setContador(contador + 1)
  }

  const restarContador = () =>
  {
    setContador(contador - 1)
  }
  return (
    <>
   <NavBar/>
   <ItemListContainer greeting ="Buen día"/>
   <p>El contador va: {contador}</p>
   <button onClick = {aumentarContador}> + </button>
   <button onClick = {restarContador}> - </button>
    </>
  );
}

export default App;
