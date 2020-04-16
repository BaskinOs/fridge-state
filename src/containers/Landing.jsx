import React from 'react';
import { Button } from 'react-bootstrap';

const Landing = (props) => {
  return (
    <div id="landing">
      <h2>This is Landing</h2>
      <form id="login-form" method="GET" action="/auth/google">
        <button className="loginBtn" id="loginBtn" type="submit">
          Login with Google
        </button>
      </form>

    </div>
  );
};

export default Landing;
