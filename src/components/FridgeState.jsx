import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

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
      <h2>Fridge State</h2>
      <div className="ingredientsList">
        <ul>{ingredients}</ul>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(FridgeState);
