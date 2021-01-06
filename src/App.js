import './App.css';
import './index.js';
import NavBar from './NavBar.js';
import ItemListContainer from './ItemListContainer.js';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';

function App() {

  return (
    <>
   <NavBar/>
   <ItemListContainer greeting ="Buen día"/>
   <ItemCount/>
   <ItemList/>
   </>
  );
}

export default App;
