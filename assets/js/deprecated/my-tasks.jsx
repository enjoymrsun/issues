// import React from 'react';
// import Task from './task';
//
// export default function MyTasks(params) {
//   let currTasks = params.tasks;
//   let currUserId = params.loginUserId;
//   let validTasks = _.filter(currTasks, function(tt) {
//     return tt.assignee.id == currUserId;
//   });
//
//   let tasks = _.map(validTasks, (tt) => <Task key={tt.id} task={tt} />);
//   return <div>
//     { tasks }
//   </div>;
// }
