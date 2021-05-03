import React from 'react';
import classes from './Button.css'



const button =(props)=>{
    return (
        <div className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clicked}>
        <span className={classes.span}>{props.children}</span>
    </div>
    )
}
export default button