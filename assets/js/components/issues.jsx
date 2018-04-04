import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav';
import AllTasks from './all-tasks';
import TaskPostForm from './task-post-form';
import UserPostForm from './user-post-form';

export default function issues_init(store) {
  ReactDOM.render(
    <Provider store={store}>
      <Issues state={store.getState()} />
    </Provider>,
    document.getElementById('root'),
  );
}

let Issues = connect((state) => state)((props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact={true} render={() =>
          <div>
            <TaskPostForm />
            <AllTasks tasks={props.tasks} />
          </div>
        } />
        <Route path="/users" exact={true} render={() =>
          <Users users={props.users} />
        } />
        <Route path="/users/:user_id" render={({match}) =>
          <AllTasks tasks={_.filter(props.tasks, (tt) =>
            match.params.user_id == tt.assignee.id )
          } />
        } />
      </div>
    </Router>
  );
});
