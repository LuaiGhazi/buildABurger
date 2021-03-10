import React, { Component } from 'react'

// Used a state based component here because it'll be a stateful component
class BurgerBuilder extends Component {
    render() {
        return (
            <>
                <div> Burger</div>
                <div> Build Controls</div>
            </>
        );
    }
}

export default BurgerBuilder;