import React from 'react';
import { Button } from 'react-bootstrap';
import PickIngredients from '../components/PickIngredients';

const Ingredients = (props) => {
  // props.getRecipes();
  return (
    <div className="Ingredients">
      <h2>Pick Ingredients</h2>
      <PickIngredients getRecipes={props.getRecipes} />
    </div>
  );
};

export default Ingredients;
