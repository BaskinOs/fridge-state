import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as IngredientActions from '../actions/ingredientActions';
import * as UserActions from '../actions/userActions';
import * as RecipeActions from '../actions/recipeAction';
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
  bindActionCreators(
    { ...IngredientActions, ...UserActions, ...RecipeActions },
    dispatch
  );

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getRecipesAction();
    this.props.getInstructions();
    // axios
    //   .get('/recipes')
    //   .then(({ data }) => {
    //     console.log(data, 'data');
    //   })
    //   .catch((err) => console.log(err, 'err'));
  }

  render() {
    // console.log(this.props, 'This is PROPS');
    const {
      ingredients,
      getRecipesAction,
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
              getRecipes={getRecipesAction}
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
