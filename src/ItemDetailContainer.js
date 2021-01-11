import React from 'react'
import ItemDetail from './ItemDetail';

const getItems = () => {
    const promesa = new Promise((resolver,rechazar)=>{

        const codigo = 200
        const respuesta = [1,2,3]
        setTimeout(function(){
        if(codigo===200){
            resolver(respuesta)
        }else{
            rechazar()
        }
    }, 2000);

    })
}

function ItemDetailContainer () {
    const [ items, setItems] = useState([])
    useEffect (() => {
       getItems()
            }
        ).then (result =>setItems(result))
            .catch (err=> console.log("Algo salio mal"))
        }[items] ;
            return (
                <>
                {items.map (item => <ItemDetail titulo = {ItemDetail.titulo} precio ={ItemDetail.precio} descripcion = {ItemDetail.descripcion}></ItemDetail>)}
                </>
            )
        
           
    
export default ItemDetailContainer;