import React from 'react';
import { Button } from 'react-bootstrap';
import PickIngredients from '../components/PickIngredients';

const Ingredients = (props) => {
  // props.getRecipes();
  return (
    <div className="Ingredients">
      <PickIngredients getRecipes={props.getRecipes} />
      <Button href="/dashboard">Dashboard</Button>
    </div>
  );
};

export default Ingredients;
