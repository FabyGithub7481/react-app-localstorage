import React from "react";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {


    return tasks.filter(t=> t.done===doneValue).map((taskItem) => (
      <TaskRow
        taskItemTr={taskItem}
        key={taskItem.name}
        toggleTask={toggleTask}
      />
    ));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
};
