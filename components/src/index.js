import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <CommentDetail
          author="Frank"
          timeAgo="Today at 4:05PM"
          content="Nice blog post!"
          avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Edward"
          timeAgo="Today at 1:29PM"
          content="I like the subject!"
          avatar={faker.image.avatar()} />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Vanessa"
          timeAgo="Today at 12:00PM"
          content="I like the writing!"
          avatar={faker.image.avatar()} />
      </ApprovalCard>

    </div>

  );
};

ReactDOM.render(<App />, document.querySelector('#root'));