import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import FridgeState from '../components/FridgeState';

const Fridge = (props) => {
  console.log('inside fridge', props.deleteIngredient);
  return (
    <div className="Fridge">
      <h2>Fridge</h2>
      
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
            <Form.Row>
              <Col id='colText'>
                <Form.Control 
                  className="inputText" 
                  placeholder="Add ingredients to your Fridge"
                  value={props.ingredientInput} 
                />
              </Col>
              <Col id='colBtn'>
                <button
                  id="postButton"
                  type="submit"
                >
                  <FontAwesomeIcon icon={faPlusSquare} color='#41c082' />
                </button>
              </Col>
            </Form.Row>
          </Form.Group>
        </Form>

      <FridgeState deleteIngredient={props.deleteIngredient} />
      <Button id="pickIngBtn" href="/ingredients">
        Choose Ingredients
      </Button>
      <Button id="backBtn" href="/dashboard">
        Dashboard
      </Button>
    </div>
  );
};

export default Fridge;
