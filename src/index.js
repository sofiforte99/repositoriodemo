import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './NavBar';
import reportWebVitals from './reportWebVitals';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';


//JSK

const Componente = <p>Hola Mundo</p>



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <NavBar/>, <CartWidget/>, <ItemListContainer/>, Componente, ItemListContainer, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


