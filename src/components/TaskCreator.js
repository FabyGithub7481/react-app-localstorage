import { useEffect, useRef, useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  //   console.log(props);
  const [newTaskName, setNewTaskName] = useState("");
  const inputNt = useRef(null)
  useEffect(() => {
  inputNt.current.focus()
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    localStorage.setItem("task", newTaskName);
    setNewTaskName("");
  };


const FocusDemo = () => {

  inputNt.current.focus()
  
  
}

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          id="inputNt"
          type="text"
          placeholder="Enter a new task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          ref={inputNt}
          className="form-control"
        />
      </div>
      <div className="col-3">
        <button onClick={FocusDemo} className="btn btn-primary btn-sm">Save Task</button>
      
      </div>
    </form>
  );
};
