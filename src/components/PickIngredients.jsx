import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import $ from 'jquery';
import { bindActionCreators } from 'redux';
import * as IngredientActions from '../actions/ingredientActions';

const mapStateToProps = (state) => ({
  ingredientsList: state.ingredient.ingredients
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...IngredientActions }, dispatch);

const PickIngredients = (props) => {
  //ingredients will populate here
  console.log('fridgeState props', props.ingredientsList);
  $('#button').on('click', function () {
    let arr = [];
    $(':checkbox').each(function () {
      if ($(this).is(':checked')) {
        arr.push($(this).val());
      }
    });
    let string = arr.join(',');
    // update the state here!!!!
    console.log('this is the string', string);
    props.getRecipes(string);
  });

  const ingredients = props.ingredientsList.map((item, index) => {
    return (
      <div key={`ingred${index}`}>
        <input
          type="checkbox"
          id="selected"
          name="selected"
          value={item}
          className="ingredientCheck"
        />
        {item}
        <br />
      </div>
    );
  });
  return (
    <div className="fridgeState">
      <h4>Choose Ingredients</h4>
      <div className="ingredientsList">
        <ul>{ingredients}</ul>
        <Button id="button">Show Recipes</Button>
        <Button className="menuBtn" id="editFridgeBtn" href="/fridge">
          Edit Fridge
        </Button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PickIngredients);
