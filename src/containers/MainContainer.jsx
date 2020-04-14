import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Wrapper from "./containers/Wrapper";

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Fridge from './Fridge';
import Ingredients from './Ingredients';
import Recipes from './Recipes';
import Instructions from './Instructions';
import Dashboard from './Dashboard';

const mapStateToProps = ({ user: { isLoggedIn } }) => ({
  isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="MainContainer">Main Container</div>
        <Route path="/" exact component={Landing} />
        <Route path="/fridge" render={() => <Fridge />} />
        <Route path="/ingredients" render={() => <Ingredients />} />
        <Route path="/recipes" render={() => <Recipes />} />
        <Route path="/instructions" render={() => <Instructions />} />
        <Route path="/dashboard" render={() => <Dashboard />} />
      </BrowserRouter>
    );
  }
}

// webpack history dev server historyfallback : true

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
