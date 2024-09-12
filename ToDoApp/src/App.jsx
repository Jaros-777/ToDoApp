import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from "react";

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([{ id: 0, name: "First Task" , completed: false}]);
  const [taskName, setTaskName] = useState("");
  let nextCurrentId = uuidv4();



  function addTask() {
    if (taskName != "") {
      const newTask = {
        id: nextCurrentId,
        name: taskName,
        completed: false,
      };

      setTaskList([...taskList, newTask]);
      setTaskName("");
    }
  }

  function deleteTask(taskId) {
    const updatedTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTasks);
  }

  function doneTask(taskId){
    const newTaskList = taskList.map((task) => task.id === taskId ? {...task, completed: !task.completed} : task)
    setTaskList(newTaskList)

  }

  

  return (
    <>
      <div id="main-container">
        <h1>To Do App</h1>
        <div id="input-field" >
          <input
            onKeyDown={(e) => {
              if (e.key == "Enter"){
                addTask();
              }
            }}
            type="text"
            placeholder="Type task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button onClick={addTask}>Click</button>
        </div>
        <ul>
          {taskList.map((t) => (
            <li key={t.id}>
              <div className="task-container">
                <input type="checkbox" checked={t.completed} onChange={()=>doneTask(t.id)}/>
                <p  style={t.completed ? {textDecoration: "line-through", textDecorationColor: "black", textDecorationThickness: 1} : {textDecoration: "none"}} >{t.name}</p>
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
