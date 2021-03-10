import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'

// Used a state based component here because it'll be a stateful component
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 2,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <div> Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;