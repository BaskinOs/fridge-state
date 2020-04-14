import React from 'react';
import { Button } from 'react-bootstrap';

const Instructions = (props) => {
  return (
    <div className="Instructions">
      <h2>We are in Instructions</h2>
      <Button href="/dashboard">Go to Dashboard</Button>
    </div>
  );
};

export default Instructions;
