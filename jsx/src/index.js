// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'


// Create a react component
const App = () => {

  const buttonText = 'Click Me!';
  const style = { backgroundColor: 'blue', color: 'white' };
  const textName = 'Enter name:';

  return (
    <div>
      <label className="label" htmlFor="name">
        { textName }
      </label>
      
      <input id="name" type="text" />
      <button style={ style }>
        { buttonText }
      </button>
    </div>
  );
};



// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);