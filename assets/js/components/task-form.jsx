import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function TaskForm(props) {
  // console.log("props@TaskPostForm", props);

  function update(ev) {
    // console.log("Update the Task Form");
    // console.log(ev);

    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_TASK_FORM',
      data: data,
    };
    props.dispatch(action);
  }

  function submit(ev) {
    console.log("Submit the Task Form");
    // console.log(ev);
    console.log(props);
    api.submit_task(props.task_form);
  }

  function clear(ev) {
    props.dispatch({
      type: 'CLEAR_TASK_FORM',
    });
  }

  let users = _.map(props.users, (uu) => <option key={uu.id} value={uu.id}>{uu.name}</option>);

  return <div style={{padding: "4ex"}}>
    <h2>New Task</h2>
    <FormGroup>
      <Label for="assignee_id">Assignee</Label>
      <Input type="select" name="assignee_id" value={props.task_form.assignee_id} onChange={update}>
        { users }
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="title">Title</Label>
      <Input type="text" name="title" placeholder="title"
            value={props.task_form.title} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="textarea" name="description" placeholder="task description"
            value={props.task_form.description} onChange={update} />
    </FormGroup>
    <FormGroup>
      <Label for="work_time">Work Time</Label>
      <Input type="number" name="work_time" step={15} min={0}
            value={props.task_form.work_time} onChange={update}/>
    </FormGroup>
    <FormGroup tag="fieldset">
      <FormGroup check>
        <Label check for="done">
          <Input type="radio" name="done" value={1} />{' '}
          Finished this Task
        </Label>
      </FormGroup>
      <FormGroup check>
        <Label check for="done">
          <Input type="radio" name="done" value={0} />{' '}
          Not Finished this Task
        </Label>
      </FormGroup>
    </FormGroup>
    <Button onClick={submit} color="primary">Submit</Button> &nbsp;
    <Button onClick={clear}>Clear</Button>
  </div>;
}

function state2props(state) {
  // console.log("rerender@PostForm", state);
  return {
    task_form: state.task_form,
    users: state.users,
  };
}

export default connect(state2props)(TaskForm);
