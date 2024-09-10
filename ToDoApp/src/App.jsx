import { useState } from "react";

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([{ id: 1, name: "lol" }]);
  const [taskName, setTaskName] = useState("");

  function addTask() {
    if (taskName != "") {
      const newTask = {
        id: taskList.length + 1,
        name: taskName,
      };

      setTaskList([...taskList, newTask]);
      setTaskName("");
    }
  }

  function deleteTask(taskId) {
    const updatedTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTasks);
  }

  return (
    <>
      <div id="main-container">
        <h1>To Do App</h1>
        <div>
          <input
            type="text"
            placeholder="Type text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button onClick={addTask}>Click</button>
        </div>
        <ul>
          {taskList.map((t) => (
            <li key={t.id}>
              <div className="task-container">
                <p>{t.name}</p>
                <button onClick={() => deleteTask(t.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
