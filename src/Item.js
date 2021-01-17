import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

function Item({nombre, imagen}) {

    return (
        <div className="item">
             <Card>
                 <CardActionArea>
                    <CardMedia component="img"
                        height="300"
                        imagen={imagen}
                        title={nombre}>
                    </CardMedia>                                      
      </CardActionArea>
    </Card>
        </div>
    )
}

export default Item; 