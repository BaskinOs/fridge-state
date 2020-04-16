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
  isLoggedIn: state.user.isLoggedIn,
  userName: state.user.userName,
  profilePic: state.user.profilePic,
  recipesList: state.recipe.recipesList,
  summary: state.recipe.summary,
  summaryPicUrl: state.recipe.summaryPicUrl,
  summaryTitle: state.recipe.summaryTitle
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
    // console.log('componentDidMount');
    this.props.getIngredients();
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
  }

  render() {
    console.log('SUMMARY', this.props.summary);
    // hasRecipes boolean
    // console.log('inside maincontainer', this.props.recipesList);
    const hasRecipes = this.props.recipesList.length > 0;
    // console.log('instructions!!!!!', this.props.instructions);
    const hasInstructions = this.props.summary.length > 0;
    // console.log('MainCotainer isLoggedIn', isLoggedIn);
    let component;
    const {
      updateIngredient,
      postIngredient,
      deleteIngredient,
      ingredientInput,
      getIngredients,
      ingredientsList,
      getRecipes,
      profilePic,
      userName,
      isLoggedIn
    } = this.props;

    if (!isLoggedIn) {
      //not logged in

      // component = <Landing />;
      component = (
        <div className="landing">
          <img
            src="http://getdrawings.com/free-icon-bw/food-icon-white-19.png"
            width="300"
          />
          <p>Welcome to FridgeState!</p>
          <form id="login-form" method="GET" action="/auth/google">
            <button className="loginBtn" id="loginBtn" type="submit">
              Login with Google
            </button>
          </form>
        </div>
      );
    } else
      component = ( //logged in - render different routes
        <React.Fragment>
          <section className="profile">
            <div>
              <img width="100" src={profilePic} />
              <p>Hello, {userName}!</p>
            </div>
          </section>
          <Route
            path="/fridge"
            render={(routeProps) => (
              <Fridge
                {...routeProps}
                updateIngredient={updateIngredient}
                postIngredient={postIngredient}
                deleteIngredient={deleteIngredient}
                ingredientInput={ingredientInput}
                ingredientsList={ingredientsList}
              />
            )}
            isAuthed={true}
          />
          <Route
            path="/ingredients"
            render={(routeProps) => (
              <Ingredients {...routeProps} getRecipes={getRecipes} />
            )}
          />
          <Route path="/recipes" render={(props) => <Recipes {...props} />} />
          <Route
            path="/instructions"
            render={(props) => <Instructions {...props} />}
          />
          <Route
            path="/dashboard"
            render={(routeProps) => (
              <Dashboard
                {...routeProps}
                getIngredients={getIngredients}
                profilePic={profilePic}
                userName={userName}
              />
            )}
            isAuthed={true}
          />
        </React.Fragment>
      );

    if (hasRecipes) {
      console.log('inside has Recipes', hasRecipes);
      console.log('recipesessss', this.props.recipesList);
      component = (
        <Recipes
          recipesList={this.props.recipesList}
          updateInstructions={this.props.updateInstructions}
        />
      );
    }

    if (hasInstructions) {
      console.log('inside has Recipes', hasInstructions);
      console.log('recipesessss', this.props.summary);
      component = (
        <Instructions
          summary={this.props.summary}
          summaryPicUrl={this.props.summaryPicUrl}
          summaryTitle={this.props.summaryTitle}
        />
      );
    }

    return (
      <BrowserRouter>
        <div className="MainContainer">{component}</div>
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
