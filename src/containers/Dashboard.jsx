import React from 'react';
import { Button } from 'react-bootstrap';

import SavedRecipes from '../components/SavedRecipes';
import FridgeState from '../components/FridgeState';

const Dashboard = (props) => {
  console.log('props in Dashboard', props)
  return (
    <div className="Dashboard">
      <h2>We are in Dashboard</h2>
      <section className='profile'>
          <div>
            <img width='100' src={props.profilePic}/>
            <p>Hello, {props.userName}!</p>
          </div>
        </section>
      <SavedRecipes savedRecipes={props} />
      <img 
        id='fridgeImg'
        src='https://cdn.clipart.email/58dd1c9ffac390819ca83c8a0d175811_refrigerator-black-and-white-transparent-png-clipart-free-_512-512.png'
      />
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
