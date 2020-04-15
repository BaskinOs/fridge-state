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
import * as userActions from '../actions/userActions';

const mapStateToProps = (state) => ({
  ingredientInput: state.ingredient.ingredientInput
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...IngredientActions, ...UserActions }, dispatch);

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getIngredients();
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
    // console.log('componentWillUnmount');
  }

  render() {
    // const { isLoggedIn } = this.props;
    // console.log('isLoggedIn', isLoggedIn);
    // if (!isLoggedIn) {
    //   return (
    //     <BrowserRouter>
    //     <Route path="/" exact component={Landing} />
    //     <p>Please log in to use the app</p>
    //   </BrowserRouter>
    //   )
    // }
    // else return (
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
        <p>Logged In!</p>
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
