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
    let vals = arr.join(',');
    let str =
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=1&ranking=1&ignorePantry=true&ingredients=' +
      vals;
    // update the state here!!!!
    console.log(str);
    props.pickIngredients(str);
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
      <h4>Pick Ingredients</h4>
      <div className="ingredientsList">
        <ul>{ingredients}</ul>
        <Button id="button" href="/recipes">
          Show me the Recipes
        </Button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PickIngredients);
