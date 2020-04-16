import React from 'react';
import { Button } from 'react-bootstrap';

const Recipes = (props) => {
  console.log('inside recipes list ', props.recipesList);
  const recipes = props.recipesList.map((item, index) => {
    return (
      <div className="recipeCard">
        <li>{item.name}</li>
        <img
          onClick={() => props.updateInstructions(item.id)}
          src={item.picUrl}
        ></img>
      </div>
    );
  });
  return (
    <div className="Recipes">
      <h2>We are in Recipes</h2>
      {recipes}
      <Button href="/instructions">Go to Instructions</Button>
      <br />
      <Button href="/dashboard">Back to Dashboard</Button>
    </div>
  );
};

export default Recipes;
