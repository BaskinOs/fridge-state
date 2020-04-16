import React from 'react';
import { Media, Button } from 'react-bootstrap';

import SavedRecipes from '../components/SavedRecipes';
import FridgeState from '../components/FridgeState';

const Dashboard = (props) => {
  console.log('props in Dashboard', props)
  return (
    <div className="Dashboard">
      <h2>Dashboard</h2>
      <section className='profile'>
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
      <img 
        id='fridgeImg'
        src='https://cdn.clipart.email/58dd1c9ffac390819ca83c8a0d175811_refrigerator-black-and-white-transparent-png-clipart-free-_512-512.png'
      />
      <FridgeState />
      <Button className='menuBtn' id='editFridgeBtn' href="/fridge">Edit My Fridge</Button>
      <form id="logout-form" method="GET" action="/auth/logout">
        <button className="logoutBtn" id="logoutBtn" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
