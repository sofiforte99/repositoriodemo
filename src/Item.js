import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Item({id, nombre, imagen}) {

    return (
        <div className="item">  
                          
        <img src={imagen} alt={nombre} />  
        <Button>
          <Link to={"/item/" + id}> Ver Detalle</Link>
        </Button>              
        </div>
    )
}

export default Item; 