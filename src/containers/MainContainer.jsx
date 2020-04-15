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
  ingredientInput: state.ingredient.ingredientInput,
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...IngredientActions, ...UserActions }, dispatch);

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
      component = (
        // <BrowserRouter>
        // <Route path="/" exact component={Landing} />
        <p>Please log in to use the app</p>
        // </BrowserRouter>
      );
    } else component = <p>Logged In!</p>;
    // console.log(this.props);

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

        {/*to check status of user login*/}
        {component}

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
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
