import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Accordion, Card } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  ingredientsList: state.ingredient.ingredients
});

const FridgeState = (props) => {
  //ingredients will populate here
  console.log('fridgeState props', props.ingredientsList);
  const ingredients = props.ingredientsList.map((item, index) => {
    return (
      <div key={`ingred${index}`}>
        <li>{item}</li>
        {/* <Button onClick={props.deleteIngredient()}>Pick Ingredients</Button> */}
      </div>
    );
  });
  return (
    <div className="fridgeState">
      {/* <h2>My Fridge</h2> */}
      {/* <div className="ingredientsList">
        <ul>{ingredients}</ul>
      </div> */}
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h2>My Fridge</h2>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="ingredientsList">
                <ul>{ingredients}</ul>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default connect(mapStateToProps)(FridgeState);
