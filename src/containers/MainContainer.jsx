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

const mapStateToProps = (state) => ({
  ingredientInput: state.ingredient.ingredientInput
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...IngredientActions, ...UserActions }, dispatch);

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props, 'This is PROPS');
    const {
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
          render={(props) => <Ingredients {...props} />}
        />
        <Route path="/recipes" render={(props) => <Recipes {...props} />} />
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
