import React, { useState } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  ingredientsList: state.ingredient.ingredients
});

const FridgeState = (props) => {
  //ingredients will populate here
  console.log('fridgeState props', props.ingredientsList);
  return (
    <div className="fridgeState">
      <h2>Fridge State</h2>
    </div>
  );
};

export default connect(mapStateToProps)(FridgeState);
