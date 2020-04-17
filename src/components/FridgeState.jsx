import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { bindActionCreators } from 'redux';
// import * as RecipeActions from '../actions/recipeAction';

const mapStateToProps = (state) => ({
  ingredientsList: state.ingredient.ingredients
});

// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ ...RecipeActions }, dispatch);

const FridgeState = (props) => {
  // if it has props.deleteIngredient, render delete button
  //ingredients will populate here
  console.log('inside fridge State', props.deleteIngredient);
  console.log('fridgeState props', props.ingredientsList);
  const ingredients = props.ingredientsList.map((item, index) => {
    if (props.deleteIngredient) {
      return (
        <div key={`ingred${index}`}>
          <li>
            {item}
            <button
            className="deleteButton"
            onClick={() => props.deleteIngredient(item)}
          >
            <FontAwesomeIcon icon={faTrash} color='#4885ed' />
          </button>
          </li>
        </div>
      );
    } else {
      return (
        <div key={`ingred${index}`}>
          <li>{item}</li>
        </div>
      );
    }
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
