import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

const burger = (props) => {
    // Object.keys() returns an array containing the object's keys
    let transformedIngredients = Object.keys(props.ingredients) //['salad', 'bacon', 'cheese']
        .map(igKey => {
            console.log([...Array(props.ingredients[igKey])])
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    console.log(i)
                    return <BurgerIngredient key={igKey + i} type={igKey} />
                });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding ingredients! </p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
};

export default burger;