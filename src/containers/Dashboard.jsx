import React from 'react';
import { Button } from 'react-bootstrap';

import SavedRecipes from '../components/SavedRecipes';
import FridgeState from '../components/FridgeState';

const Dashboard = (props) => {
  return (
    <div className="Dashboard">
      <h2>We are in Dashboard</h2>
      <SavedRecipes savedRecipes={props} />
      <FridgeState />
      <Button href="/fridge">Edit My Fridge</Button>
      <br />
      <form id="logout-form" method="GET" action="/auth/logout">
        <button className="loginBtn" id="loginBtn" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
