import React from 'react';
import { Button } from 'react-bootstrap';

const Instructions = (props) => {
  return (
    <div className="Instructions">
      <h2>We are in Instructions</h2>
      <div className="summary">
        <h2>{props.summaryTitle}</h2>
        <img src={props.summaryPicUrl} />
        <p>{props.summary}</p>
      </div>
      <br />
      <Button href="/ingredients">Pick Ingredients</Button>
      <br />
      <Button href="/dashboard">Go to Dashboard</Button>
    </div>
  );
};

export default Instructions;
