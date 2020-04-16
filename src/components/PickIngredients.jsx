import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

const mapStateToProps = (state) => ({
  ingredientsList: state.ingredient.ingredients
});

const PickIngredients = (props) => {
  //ingredients will populate here
  console.log('fridgeState props', props.ingredientsList);
  const ingredients = props.ingredientsList.map((item, index) => {
    return (
      <div key={`ingred${index}`}>
        <li>{item}</li>
      </div>
    );
  });
  return (
    <div className="fridgeState">
      <h4>Pick Ingredients</h4>
      <div className="ingredientsList">
        <ul>{ingredients}</ul>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(PickIngredients);
