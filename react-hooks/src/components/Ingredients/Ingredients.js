import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from "./IngredientList";

function Ingredients() {
    const [ingredients, setIngredients] = useState([]);
    const [name, setName] = useState('initial name');

    const addIngredientHandler = ingredient => {
        setIngredients(prevIngredients => [...prevIngredients, {id: Math.random().toString(), ...ingredient}]);
    };

    const removeIngredientHandler = id => {
        setIngredients(prevIngredients => prevIngredients.filter(ing => ing.id !== id));
        console.log(name);
        setName('new name');
        console.log(name);
        setName(prevName => {
            console.log(prevName);
            return prevName;
        });
    };

    return (
        <div className="App">
            <IngredientForm onAddIngredient={addIngredientHandler}/>

            <section>
                <Search/>
                <IngredientList ingredients={ingredients} onRemoveItem={removeIngredientHandler}/>
            </section>
        </div>
    );
}

export default Ingredients;
