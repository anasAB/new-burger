import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
// import burgerIngredients from './BurgerIngredients'

const burger = (props) => {

    let ingredient = Object.keys(props.ingredients).map(item => {
        return [...Array(props.ingredients[item])].map((_, i) => {
            return <BurgerIngredient key={item + i} type={item} />;
        });
    }).reduce((arrays, element) => { return arrays.concat(element) })

    if (ingredient.length === 0) {
        ingredient = <div>Please Add Some Ingredients</div>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;