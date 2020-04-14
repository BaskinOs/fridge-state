import React, { Component } from "react";
// import { hot } from "react-hot-loader";
import styles from "./styles/styles.scss";

import Login from "./components/Login.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, BaskinOSSS!!!!</h1>
        <Login />
      </div>
    );
  }
}

export default App;
