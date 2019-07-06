import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Frank" timeAgo="Today at 4:05PM" />

      <CommentDetail author="Edward" timeAgo="Today at 1:29PM" />

      <CommentDetail author="Vanessa" timeAgo="Today at 12:00PM" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));