import TaskCreator from "./components/TaskCreator";
import "./App.css";
import { useState } from "react";

function App() {
  const [taskItems, setTaskItems] = useState([
    { name: "mi primer tarea", done: false },
    { name: "mi segunda tarea", done: false },
    { name: "mi tercera tarea", done: false },
  ]);

  function createNewTask(taskName) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: true }]);
    }
  }

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      <table>
        <thead>
          <tr>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {taskItems.map((taskItem) => (
            <tr key={taskItem.name}>
              <td>{taskItem.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
