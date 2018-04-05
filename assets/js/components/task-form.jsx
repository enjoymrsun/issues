import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import api from '../api';

function TaskForm(props) {
  console.log("props@TaskPostForm", props);

  function update(ev) {
    let tgt = $(ev.target);

    let data = {};
    data[tgt.attr('name')] = tgt.val();
    let action = {
      type: 'UPDATE_TASK_FORM',
      data: data,
    };
    console.log(action);
    props.dispatch(action);
  }

  function submit(ev) {
    api.submit_task(props.task_form);
    console.log(props.task_form);
  }

  function clear(ev) {
    props.dispatch({
      type: 'CLEAR_TASK_FORM',
    });
  }

  // let times = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240];
  // times = _.map(times, (tt, ii) => <option key={ii} value={tt}>{tt}</option>);

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
            value={this.props.task_form.title} onChange={this.update} />
    </FormGroup>
    <FormGroup>
      <Label for="description">Description</Label>
      <Input type="textarea" name="description" placeholder="task description"
            value={this.props.task_form.description} onChange={this.update} />
    </FormGroup>
    <FormGroup>
      <Label for="work_time">Work Time</Label>
      <Input type="number" name="work_time" step={15} min={0}
            value={this.props.task_form.work_time} onChange={this.update}/>
    </FormGroup>
    <FormGroup>
      <Label for="done">Done</Label>
      <Input type="checkbox" name="done" value={0} checked={1}
            value={this.props.task_form.done} onChange={this.update}/>
    </FormGroup>
    <Button onClick={submit} color="primary">Submit</Button> &nbsp;
    <Button onClick={clear}>Clear</Button>
  </div>;
}

function state2props(state) {
  console.log("rerender@PostForm", state);
  return {
    task_form: state.task_form,
    users: state.users,
  };
}

export default connect(state2props)(TaskForm);
