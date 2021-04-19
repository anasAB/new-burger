import React from 'react';
import classes from './Controls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = (props) => {
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
        </div>
    )
}

export default controls


