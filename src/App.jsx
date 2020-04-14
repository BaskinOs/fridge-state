import React, { Component } from "react";
import { hot } from "react-hot-loader";
import styles from "./styles/styles.scss";

import MainContainer from "./containers/MainContainer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default hot(module)(App);
