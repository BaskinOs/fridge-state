import React from 'react';
import { Button } from 'react-bootstrap';

const Ingredients = (props) => {
  return (
    <div className="Ingredients">
      <h2>We are in Ingredients</h2>
      <Button href="/recipes">Show me the Recipes</Button> <br />
      <Button href="/dashboard">Back to Dashboard</Button>
    </div>
  );
};

export default Ingredients;
