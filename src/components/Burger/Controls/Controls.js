import React from 'react';
import classes from './Controls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = (props) => {
    const ingredientsAmount = Object.values(props.ingredients).reduce((previousValue, currentValue ) => previousValue + currentValue , 0 )
    
    return (
        <div className={classes.Control}>
            {
                props.prices.map(item => {
                    return <BuildControl
                        key={Math.random()}
                        ingredient={item}
                        price={item.price}
                        count={item.count}
                        addIngredient={props.addIngredient}
                        removeIngredient={props.removeIngredient}
                        disabledLessButton={props.disabledLessButton[item['type']]} />
                }
                )}
            <div>Total Price: {props.totalPrice}</div>
            <button className={classes.OrderButton}  disabled={!ingredientsAmount} onClick={() => props.showModal()}>Order</button>
        </div>
    )
}

export default controls


