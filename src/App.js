import './App.css';
import './index.js';
import NavBar from './NavBar.js';
import ItemListContainer from './ItemListContainer.js';
import ItemCount from './ItemCount.js';


function App() {

  return (
    <>
   <NavBar/>
   <ItemListContainer greeting ="Buen día"/>
   <ItemCount/>
   </>
  );
}

export default App;
