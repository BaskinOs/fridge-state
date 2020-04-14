import React from 'react';
import { Button } from 'react-bootstrap';

const Fridge = (props) => {
  return (
    <div className="Fridge">
      <h2>We are in Fridge</h2>
      <Button href="/ingredients">Go to Ingredients</Button>
    </div>
  );
};

export default Fridge;
