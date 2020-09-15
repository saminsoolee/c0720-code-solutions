import React from 'react';
import ReactDOM from 'react-dom';

// const element = props => {
//   return <button>Click Me!</button>;
// };
// const container = document.querySelector('#root');

// ReactDOM.render(element, container);

// var element = function CustomButton(props) {
//   return <button>Click Me!</button>;
// };

// var container = document.querySelector('#root');

// ReactDOM.render(element, container);

function CustomButton() {
  return <button>Click Me!</button>;
}
const element = <CustomButton/>;
const container = document.querySelector('#root');

ReactDOM.render(element, container);
