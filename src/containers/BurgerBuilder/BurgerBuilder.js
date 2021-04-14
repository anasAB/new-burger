import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 0,
            meat: 2
        }
    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <Controls ingredients={this.state.ingredients} />
            </div>
        );
    }
}

export default BurgerBuilder;