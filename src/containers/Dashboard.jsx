import React from 'react';
import { Media, Button } from 'react-bootstrap';

import SavedRecipes from '../components/SavedRecipes';
import FridgeState from '../components/FridgeState';

const Dashboard = (props) => {
  console.log('props in Dashboard', props);
  return (
    <div className="Dashboard">
      <section className="profile">
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={props.profilePic}
            alt="profile pic"
          />
          <Media.Body>
            <h5>Hello, {props.userName}</h5>
            <p>Ready for your new recipe today?</p>
          </Media.Body>
        </Media>
      </section>
      <SavedRecipes savedRecipes={props} />
      <FridgeState />
      <div className='buttons'>
        <Button className="menuBtn" id="pickIngBtn" href="/ingredients">
          Choose Ingredients
        </Button>
        <Button className="menuBtn" id="editFridgeBtn" href="/fridge">
          Edit Fridge
        </Button>
      </div>
      <form id="logout-form" method="GET" action="/auth/logout">
        <button className="logoutBtn" id="logoutBtn" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
