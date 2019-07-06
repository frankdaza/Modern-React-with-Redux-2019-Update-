import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Frank" />

      <CommentDetail author="Edward" />

      <CommentDetail author="Vanessa" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));