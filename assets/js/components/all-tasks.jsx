import React from 'react';
import Post from './post';

export default function AllTasks(params) {
  let currTasks = params.tasks;
  let tasks = _.map(currTasks, (tt) => <Task key={tt.id} task={tt} />);
  return <div>
    { tasks }
  </div>;
}
