import React from 'react';
import { Button } from 'react-bootstrap';
import PickIngredients from '../components/PickIngredients';

const Ingredients = (props) => {
  // props.getRecipes();
  return (
    <div className="Ingredients">
      <h2>We are in Ingredients</h2>
      <PickIngredients getRecipes={props.getRecipes} />
      <Button href="/dashboard">Back to Dashboard</Button>
    </div>
  );
};

export default Ingredients;
