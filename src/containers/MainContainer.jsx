import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Wrapper from "./containers/Wrapper";

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
      <div className="MainContainer">
        <h2>Helloooooooooo</h2>
        <input type="text"></input>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
