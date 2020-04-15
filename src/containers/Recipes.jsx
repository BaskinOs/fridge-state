import React from 'react';
import { Button } from 'react-bootstrap';

const Recipes = (props) => {
  return (
    <div className="Recipes">
      <h2>We are in Recipes</h2>
      <Button href="/instructions">Go to Instructions</Button>
      <br />
      <Button href="/dashboard">Back to Dashboard</Button>
    </div>
  );
};

export default Recipes;
