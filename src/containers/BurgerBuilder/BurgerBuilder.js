import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger'

// Used a state based component here because it'll be a stateful component
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }

    render() {
        return (
            <>
                <Burger />
                <div> Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;