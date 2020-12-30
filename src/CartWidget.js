import React from 'react';
import { Icon } from '@material-ui/core';

const CartWidget = () => {
    return (
        <div>
        <Icon>add_circle</Icon>
        <Icon color="primary">add_circle</Icon>
        <Icon color="secondary">add_circle</Icon>
        <Icon fontSize="small">add_circle</Icon>
        <Icon style={{ fontSize: 30 }}>add_circle</Icon>
        </div>
    )
}

export default CartWidget
