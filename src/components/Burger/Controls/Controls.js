import React from 'react';
import classes from './Controls.css';
import BuildControl from './BuildControl/BuildControl';



const controlsType = [
    { label: 'Salad', type: 'salad', price: 0.50 },
    { label: 'Bacon', type: 'bacon', price: 0.30 },
    { label: 'Meat', type: 'meat', price: 0.40 },
    { label: 'Cheese', type: 'cheese', price: 0.20 }
]


const controls = (props) => {
    return (
        <div className={classes.Control}>
            {controlsType.map(item => (
                <BuildControl key={item.label} ingredients={item} />
            ))}
        </div>


    )


}

export default controls