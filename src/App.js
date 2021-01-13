import './App.css';
import './index.js';
import NavBar from './NavBar.js';
import ItemListContainer from './ItemListContainer.js';
import ItemCount from './ItemCount.js';
import ItemList from './ItemList.js';
import ItemDetailContainer from './ItemDetailContainer.js';
import ItemDetail from './ItemDetail';

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
   <NavBar/>
   <ItemListContainer greeting ="Buen día"/>
   <ItemCount/>
   <ItemList/>
   <ItemDetail products = {items}/>
   </>
  );
}



export default App;
