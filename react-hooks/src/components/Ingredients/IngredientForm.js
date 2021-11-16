import React from 'react';
import {useState} from "react";

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  const [state, setState] = useState({title:'', amount:''})

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title" value={state.title}
                   onChange={event => setState(prevState=> ({
                       title: event.target.value,
                       amount: prevState.amount
                   }))}/>
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={state.amount}
                   onChange={event => setState(prevState=> ({
                     amount: event.target.value,
                     title: prevState.title
                   }))}/>
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
