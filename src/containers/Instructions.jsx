import React from 'react';
import { Button } from 'react-bootstrap';

const Instructions = (props) => {
  const sourceButtonClicked = () => window.open(props.externalUrl, '_blank');
  const glutenFreePic =
    'https://png2.cleanpng.com/sh/b4b1a345ee8654635ed50d1551d5d2f3/L0KzQYm3VsE6N6dsjJH0aYP2gLBuTfdtfaVqhp9vcnXoPbXwhgQubpD0fJ91b4ewc7L5gv9pgZV3eeZuLXTsdcW0lvVoaZ9uRdl1dYTofn7tkvVmNWZnSqptM3O5RYG7hvE6NmI7TKkENkO1QYa5WcQxOmQ2SKU7OT7zfri=/kisspng-gluten-free-diet-food-low-carbohydrate-diet-vegani-gluten-free-5b28d3c6504fa9.164796321529402310329.png';
  const veganPic =
    'https://png2.cleanpng.com/sh/c1f8966f24783243dafa32268bc2a737/L0KzQYm3VMIzN6R1j5H0aYP2gLBuTfRqbaVmius2c4XzgL3sjfVvfF5nRehydHHwebB6TgZmb5JzgeV2LXX2g7b1lPlidF5mRadqZHS1cYGAUBI1PWMARqUEOEm1QIm7UcUzPGU5S6gANUK3Qom1kP5o/kisspng-dietary-supplement-b-vitamins-veganism-essential-a-5add2a073b4529.3989208415244436552428.png';
  const vegetarianPic =
    'https://png2.cleanpng.com/sh/3c41b756b49bf2a71fd8161a52995480/L0KzQYq3UcA4N5J2R91yc4Pzfri0lvVobaVmittqbj3kfrW0jv9vNadqf9d9YYLscbA0jfFzc6QyjtdwZYTkgrrojvl0dV5njes2b4LqcbBwg71kaZRmh595b4fndcO0iBlvbaVue6ZxZXHvhLm0VfM0O2FpSqI5OUC1com1VcYyOmg6SKo6NUS5SIWCVcY5OGQ7UZD5bne=/kisspng-vegetarian-and-non-vegetarian-marks-vegetarianism-buy-organic-cacao-powder-kinetic4health-5c330d200902b8.5612750815468495680369.png';
  const imageArray = [];
  for (let diet in props.diet) {
    if (props.diet[diet] && diet === 'isGlutenFree') {
      imageArray.push(
        <img
          className="dietIcon"
          id="glutenFreePic"
          width={60}
          height={64}
          src={glutenFreePic}
        />
      );
    }
    if (props.diet[diet] && diet === 'isVegetarian') {
      imageArray.push(
        <img className="dietIcon" width={64} height={64} src={vegetarianPic} />
      );
    }
    if (props.diet[diet] && diet === 'isVegan') {
      imageArray.push(
        <img className="dietIcon" width={50} height={50} src={veganPic} />
      );
    }
  }
  return (
    <div className="Instructions">
      <div className="summary">
        <h2>{props.summaryTitle}</h2>
        {imageArray}
        <p>Prep Time: {props.prepTime}</p>
        <img className='recipeImg' src={props.summaryPicUrl} />
        <p className='recipeSummary'>
          {/*converts string to html in jsx */}
          <td dangerouslySetInnerHTML={{__html: props.summary}} />
        </p>
          <button className="menuBtn" onClick={() => sourceButtonClicked()}>
            Source
          </button>
      </div>
      <br />
      <Button href="/ingredients">Pick Ingredients</Button> <br />
      <Button href="/dashboard">Go to Dashboard</Button>
    </div>
  );
};

export default Instructions;
