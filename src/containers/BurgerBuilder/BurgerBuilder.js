import React, { Component } from 'react';
// import Au/x from '../../ hoc / Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 2,
            bacon: 1,
            cheese: 1,
            meat: 2
        }
    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </div>
        );
    }
}

export default BurgerBuilder;