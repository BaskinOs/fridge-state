import React from 'react';
import { Button, DropdownButton, Dropdown, ListGroup } from 'react-bootstrap';

const Ingredients = (props) => {
  // props.getRecipes();
  return (
    <div className="Ingredients">
      <h2>We are in Ingredients</h2>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/ing-1">{props.ingredients}</Dropdown.Item>
        <Dropdown.Item href="#/ing-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/ing-3">Something else</Dropdown.Item>
      </DropdownButton>
      <br></br>
      <br></br>
      <ListGroup>
        <ListGroup.Item>{props.ingredients[0]}</ListGroup.Item>
        <ListGroup.Item>{props.ingredients[1]}</ListGroup.Item>
        <ListGroup.Item>{props.ingredients[2]}</ListGroup.Item>
        <ListGroup.Item>{props.ingredients[3]}</ListGroup.Item>
        <ListGroup.Item>{props.ingredients[4]}</ListGroup.Item>
      </ListGroup>
      <br></br>
      <br></br>
      <Button href="/recipes">Show me the Recipes</Button> <br />
      <Button href="/dashboard">Back to Dashboard</Button>
    </div>
  );
};

export default Ingredients;
