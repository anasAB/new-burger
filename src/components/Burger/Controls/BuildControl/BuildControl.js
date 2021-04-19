import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => {
    let { label, type, price, count } = props.ingredient
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{label}</div>
            <button className={classes.Less} onClick={() => props.removeIngredient(type, price, count)} disabled={props.disabledLessButton}>Less</button>
            <button className={classes.More} onClick={() => props.addIngredient(type, price, count)}>More</button>
            <div className={classes.Label}>{price}</div>
        </div>
    )
}

export default buildControl

