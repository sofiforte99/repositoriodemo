import React, {useState} from "react";
import ItemCount from "./ItemCount.js";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



function ItemDetail( { item, nombre, imagen, description, precio }) {
  const [contador, setContador] = useState(1)
  const [stock] = useState(10)
  const [initial] = useState(1)   
  const [ cart, setCart ] = useState([])
    const [ open, setOpen ] = useState(false)
    function aumentarContador(){
        if (contador < stock ){
            setContador(contador+1)
        }
    }
    function restarContador() {
        if (contador > initial ){
            setContador(contador-1)
        }
    }

    function agregarAlCarrito(product) {
        console.log("Agregar producto " + contador)
        setCart(...cart, { id: product.id, nombre: product.nombre, imagen: product.imagen, amount: contador })
        
        setOpen(true)
    }

    return (
        <div className="itemDetail">
             <Card>
              <CardActionArea>
              <img src={imagen} alt={nombre} /> 
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {nombre}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {description} por ${precio}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          <div className="itemDetail__contador">
            <ItemCount initial={initial} stock={stock} aumentarContador={aumentarContador} restarContador={restarContador}
            agregarAlCarrito={agregarAlCarrito} item={item} contador={contador} open={open}/>
          </div>          
        </div>
    )
}

export default ItemDetail;