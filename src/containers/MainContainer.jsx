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
  profilePic: state.user.profilePic
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
    const isLoggedIn = this.props.isLoggedIn;
    // console.log('MainCotainer isLoggedIn', isLoggedIn);

    let component;
    if (!isLoggedIn) {
      //not logged in
      component = <p>Welcome to FridgeState!</p>;
    } else
      component = ( //logged in - render different routes
        <React.Fragment>
          <section className="profile">
            <div>
              <img width="100" src={this.props.profilePic} />
              <p>Hello, {this.props.userName}!</p>
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
            render={(props) => <Ingredients {...props} />}
          />
          <Route path="/recipes" render={(props) => <Recipes {...props} />} />
          <Route
            path="/instructions"
            render={(props) => <Instructions {...props} />}
          />
          <Route
            path="/dashboard"
            render={(routeProps) => (
              <Dashboard {...routeProps} getIngredients={getIngredients} />
            )}
            isAuthed={true}
          />
        </React.Fragment>
      );

    const {
      updateIngredient,
      postIngredient,
      deleteIngredient,
      ingredientInput,
      getIngredients,
      ingredientsList
    } = this.props;
    return (
      <BrowserRouter>
        <div className="MainContainer">Main Container</div>
        <Route path="/" exact component={Landing} />
        {/*render component based on state of user login*/}
        {component}
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
