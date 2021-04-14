import React from 'react';
import classes from './BuildControl.css'

const buildControl = (props) => {
    console.log(props.ingredients);
    let { label, price } = props.ingredients
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{label}</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
            <div className={classes.Label}>{price}</div>
        </div>
    )



}

export default buildControl

