//Login page with google oauth

import React, { Component } from 'react';
import { connect } from 'react-redux';

// const mapStateToProps = ({ user: { isLoggedIn } }) => ({
//   isLoggedIn,
// });
  
// const mapDispatchToProps = dispatch => ({});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { isLoggedIn } = this.props;
    // const authBtn = <button>some button</button>;
    // if (!isLoggedIn) {
    //   authBtn = (
    //     <form id="login-form" method="GET" action="/auth/google">
    //       <button className="loginBtn" id="loginBtn" type="submit">
    //         Login with Google
    //       </button>
    //     </form>
    //   )
    // }
    // else {
    //   <form id="logout-form" method="GET" action="/auth/logout">
    //     <button className="loginBtn" id="loginBtn" type="submit">
    //       Logout
    //     </button>
    //   </form>
    // }

    return (
      <div id="landing">
        <form id="login-form" method="GET" action="/auth/google">
          <button className="loginBtn" id="loginBtn" type="submit">
            Login with Google
          </button>
        </form>
        <form id="logout-form" method="GET" action="/auth/logout">
         <button className="loginBtn" id="loginBtn" type="submit">
           Logout
         </button>
       </form>
      </div>
    );
  }
}

export default Login;