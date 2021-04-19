import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        controlsType: [
            { label: 'Salad', type: 'salad', price: 1, count: 0 },
            { label: 'Bacon', type: 'bacon', price: 1.50, count: 0 },
            { label: 'Meat', type: 'meat', price: 2, count: 0 },
            { label: 'Cheese', type: 'cheese', price: 1, count: 0 }]
        ,
        totalPrice: 2,
        disabled: false,
    }




    addIngredientHandler = (type, price, count) => {
        const updatedIngredients = { ...this.state.ingredients };
        const IngredientsCount = this.state.ingredients[type] + 1;
        updatedIngredients[type] = IngredientsCount;
        const updateTotalPrice = this.state.totalPrice + price
        this.setState({ ingredients: updatedIngredients, totalPrice: updateTotalPrice })

        //TODO try to use controlType instead of ingredients
    }



    removeIngredientHandler = (type, price) => {
        const IngredientsCount = this.state.ingredients[type] - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = IngredientsCount;
        const updateTotalPrice = this.state.totalPrice - price
        this.setState({ ingredients: updatedIngredients, totalPrice: updateTotalPrice })
    }

    render() {
        const disabledLessButton = { ...this.state.ingredients };
        for (let i in disabledLessButton) {
            disabledLessButton[i] = disabledLessButton[i] <= 0
        }
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <Controls
                    ingredients={this.state.ingredients}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    totalPrice={this.state.totalPrice} prices={this.state.controlsType}
                    disabledLessButton={disabledLessButton}
                />
            </div>
        );
    }
}

export default BurgerBuilder;