import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import styles from './styles/styles.scss';

import MainContainer from './containers/MainContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>FridgeState</h1>
        <MainContainer />
      </div>
    );
  }
}

export default hot(module)(App);
