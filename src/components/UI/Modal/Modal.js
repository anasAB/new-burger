import React from 'react';
import Button from '../Button/Button';
import classes from './Modal.css'

const modal = (props) => {
    return (
        <div className={classes.Modal}>
            <div>Order Summary</div>
            <div className={classes.InnerModal}>
                <p>ingredients</p>
                {Object.keys(props.ingredients).map(key => (
                    <li style={{ textTransform: 'capitalize' }} key={Math.random()}>{key} : <span>{props.ingredients[key]}</span></li>
                ))}
                <p>Total Price: {props.totalPrice}</p>
            </div>
            <Button btnType='continue'>Continue</Button>
            <Button btnType='Cancel' clicked={props.closeModal}>Cancel</Button>
        </div>
    )
}

export default modal