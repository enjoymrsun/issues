import React from 'react';
import { Card, CardBody } from 'reactstrap';

export default function Task(params) {
  let task = params.task;

  let finished = "No";
  if (task.done == 1) {
    finished = "Yes";
  }

  return <Card>
    <CardBody>
      <div>
        <p>Assignee ID: <b>{ task.assignee_id }</b>;</p>
        <p>Work Time: <b>{ task.work_time }</b> minutes, Finished: <b>{ finished }</b>;</p>
        <p>Title: <b>{ task.title }</b></p>
        <p>Content: { task.description }</p>
      </div>
    </CardBody>
  </Card>;
}
