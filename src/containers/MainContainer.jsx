import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as IngredientActions from '../actions/ingredientActions';
import * as UserActions from '../actions/userActions';
// import Wrapper from "./containers/Wrapper";

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Fridge from './Fridge';
import Ingredients from './Ingredients';
import Recipes from './Recipes';
import Instructions from './Instructions';
import Dashboard from './Dashboard';
import axios from 'axios';

const mapStateToProps = (state) => ({
  ingredientInput: state.ingredient.ingredientInput,
  ingredients: state.ingredient.ingredients
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...IngredientActions, ...UserActions }, dispatch);

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props, 'This is PROPS');
    const {
      ingredients,
      getRecipes,
      getInstructions,
      updateIngredient, // reducer
      postIngredient, // reducer "newIngredient"
      deleteIngredient,
      ingredientInput // Ingredient State
    } = this.props;
    return (
      <BrowserRouter>
        <div className="MainContainer">Main Container</div>
        <Route path="/" exact component={Landing} />
        <Route
          path="/fridge"
          render={(routeProps) => (
            <Fridge
              {...routeProps}
              updateIngredient={updateIngredient}
              postIngredient={postIngredient}
              deleteIngredient={deleteIngredient}
              ingredientInput={ingredientInput}
            />
          )}
          isAuthed={true}
        />
        <Route
          path="/ingredients"
          render={(props) => (
            <Ingredients
              {...props}
              ingredients={ingredients}
              getRecipes={getRecipes}
            />
          )}
        />
        <Route
          path="/recipes"
          render={(props) => (
            <Recipes {...props} instructions={getInstructions} />
          )}
        />
        <Route
          path="/instructions"
          render={(props) => <Instructions {...props} />}
        />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

// RECIPE SEARCH RESPONSE BODY
// res.data = array of objects contaning different recipes
// res.data[index].id = recipe's id which will be submitted into Recipe instruction query
// res.data[index].title = name of recipe
// red.data[index].image = picture of recipe

// INSTRUCTION RESPONSE BODY
// res.data.extendedIngredients = array of objects containing ingredients
// res.data.readyInMinutes = Number
// res.data.image = image
// res.data.title = title
// res.data.summary = summary of recipe
// res.data.istructions = recipe instructions (may be null)

// fetch(
//   'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=1&ranking=1&ignorePantry=true&ingredients=apples,flour,sugar',
//   {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host':
//         'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//       'x-rapidapi-key': '573c26c799msh27b6667d63bc248p16cd7bjsnb8a840afd3f5'
//     }
//   }
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data, 'This is the recipe name');
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// fetch(
//   'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/48191/information',
//   {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host':
//         'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//       'x-rapidapi-key': '573c26c799msh27b6667d63bc248p16cd7bjsnb8a840afd3f5'
//     }
//   }
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data, 'These are the Instructions');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch(
//   `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=${numOfRes}&ranking=1&ignorePantry=false&ingredients=apples%252Cflour%252Csugar`,
//   {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host':
//         'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//       'x-rapidapi-key': '573c26c799msh27b6667d63bc248p16cd7bjsnb8a840afd3f5'
//     }
//   }
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fetch(
//   `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipe_id}/information`,
//   {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-host':
//         'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//       'x-rapidapi-key': '573c26c799msh27b6667d63bc248p16cd7bjsnb8a840afd3f5'
//     }
//   }
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
