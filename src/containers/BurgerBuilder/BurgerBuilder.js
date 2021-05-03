import { element } from 'prop-types';
import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Modal from '../../components/UI/Modal/Modal';

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
        showOrderModal: false //TODO Change it back to False
    }


    addIngredientHandler = (type, price) => {
        const updatedIngredients = { ...this.state.ingredients };
        const IngredientsCount = this.state.ingredients[type] + 1;
        updatedIngredients[type] = IngredientsCount;
        const updateTotalPrice = this.state.totalPrice + price
        this.setState({ ingredients: updatedIngredients, totalPrice: updateTotalPrice })
    }


    removeIngredientHandler = (type, price) => {
        const IngredientsCount = this.state.ingredients[type] - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = IngredientsCount;
        const updateTotalPrice = this.state.totalPrice - price
        this.setState({ ingredients: updatedIngredients, totalPrice: updateTotalPrice })
    }


    showModalHandler = () => { this.setState({ showOrderModal: true }) }

    closeModalHandler = () => {
        console.log('Clikced Close');
        this.setState({ showOrderModal: false })
    }

    render() {
        const disabledLessButton = { ...this.state.ingredients };
        for (let i in disabledLessButton) {
            disabledLessButton[i] = disabledLessButton[i] <= 0
        }


        const showModal = this.state.showOrderModal ? 
        <Backdrop >
                <Modal
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
                closeModal={this.closeModalHandler}
                style={{ transform: this.state.showModal ? 'translateY(0)' : 'translateY(-100vh)' }} /> 
        </Backdrop> : ''

        return (
            <div>
                { showModal}
                <Burger ingredients={this.state.ingredients} />
                <Controls
                    ingredients={this.state.ingredients}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    totalPrice={this.state.totalPrice}
                    prices={this.state.controlsType}
                    disabledLessButton={disabledLessButton}
                    showModal={this.showModalHandler}

                />
            </div>
        );
    }
}

export default BurgerBuilder;