import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="Game of Thrones" color="YellowGreen"/>
      <MyTitle title="House of Cards" color="GreenYellow"/>
      <MyTitle title="Stranger Things" color="Peru"/>
      <MyTitle title="The Americans" color="Burlywood" />
    </div>
  );
};

render(<MyFirstComponent/>, document.getElementById('app'));
