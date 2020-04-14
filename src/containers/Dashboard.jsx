import React from 'react';
import { Button } from 'react-bootstrap';

const Dashboard = (props) => {
  return (
    <div className="Dashboard">
      <h2>We are in Dashboard</h2>
      <Button href="/">Logout</Button>
    </div>
  );
};

export default Dashboard;
