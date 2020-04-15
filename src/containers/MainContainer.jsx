import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import Fridge from './Fridge';
import Ingredients from './Ingredients';
import Recipes from './Recipes';
import Instructions from './Instructions';
import Dashboard from './Dashboard';
import * as userActions from "../actions/userActions";

const mapStateToProps = ({ user: { isLoggedIn } }) => ({
  isLoggedIn
});

const mapDispatchToProps = (dispatch) => bindActionCreators(userActions, dispatch)

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('componentDidMount');
    // this.props.verifyLogin();
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
    console.log('componentWillUnmount');
  }

  render() {
    const { isLoggedIn } = this.props;
    console.log('isLoggedIn', isLoggedIn);
    if (!isLoggedIn) {
      return (
        <BrowserRouter>
        {/* <div className="MainContainer">Main Container</div> */}
        <Route path="/" exact component={Landing} />
        {/* <Route path="/fridge" render={() => <Fridge />} />
        <Route path="/ingredients" render={() => <Ingredients />} />
        <Route path="/recipes" render={() => <Recipes />} />
        <Route path="/instructions" render={() => <Instructions />} />
        <Route path="/dashboard" render={() => <Dashboard />} /> */}
        <p>Please log in to use the app</p>
      </BrowserRouter>
      )
    }
    else return (
      <BrowserRouter>
        <div className="MainContainer">Main Container</div>
        <p>Logged In!</p>
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
