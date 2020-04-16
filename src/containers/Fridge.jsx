import React from 'react';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import FridgeState from '../components/FridgeState';

const Fridge = (props) => {
  return (
    <div className="Fridge">
      <h2>Fridge</h2>
      {/* <InputGroup className="mb-3">
        <FormControl
          placeholder="Add ingredients to your Fridge"
          aria-label="Add ingredients"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">Button</Button>
        </InputGroup.Append>
      </InputGroup> */}

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.postIngredient();
        }}
      >
        <Form.Group
          className="inputReq"
          controlId="exampleForm.ControlTextarea1"
          onChange={props.updateIngredient}
        >
          <Form.Label className="prompt">
            Add ingredients to your Fridge
          </Form.Label>
          <Form.Control className="inputText" value={props.ingredientInput} />
        </Form.Group>
        <Button
          id="postButton"
          className="btn btn-secondary btn-md"
          type="submit"
        >
          Add
        </Button>
      </Form>
      <FridgeState deleteIngredient={props.deleteIngredient} />
      <Button id='pickIngBtn' href="/ingredients">Choose Ingredients</Button>
      <Button id='backBtn' href="/dashboard">Dashboard</Button>
    </div>
  );
};

export default Fridge;
