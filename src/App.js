import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputTask, setInputTask] = useState({description:''});
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(0)
  
  const submitHandler = (e) => {
    e.preventDefault();
    setId(id + 1)
    setTasks([...tasks, inputTask]);
  };
  
  const createTaskHandler = (text)=> { 
    setInputTask({id, description:text, complete:false})
  }

  const deleteTask = (id)=>{
    const newArray = tasks.filter((task) => task.id !== id)
    setTasks(newArray)
  }

  const TaskComplete = (id) => {
    const newArray = tasks.map((tasks)=>{
    if (tasks.id === id) {
      tasks.complete = !tasks.complete;
    }
    return tasks
    })
    setTasks(newArray)
  }

  return (
    <div className="container">
      <h1>Task Advanced</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inputTask.description}
          placeholder='Enter a task'
          onChange={(e) => createTaskHandler(e.target.value)}
        />
        <button type="submit">ADD TASK</button>
      </form>

      <div className="task-container">
        {tasks.map((item, index)=>
        
          <div key={index} className="task-card">
            <button className={item.complete ? 'btn-incomplete' : 'btn-complete'}
              type='button'
              onClick={() => TaskComplete(item.id)}>
              {item.complete ? 'Complete' : 'Incomplete'}
            </button>

            <p className={item.complete ? 'task-complete':''}>
             {!item.complete ? item.description : <strike>{item.description}</strike>}
            </p>

            <button id="delete" type="button" onClick={() => deleteTask (item.id)}>
              Delete
            </button>
          </div>
        )}
       </div>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";

// function App() {

//   return (
//     <div className="container">
//       <h1>Task Basic</h1>
//       <form>
//         <input type="text" placeholder="Enter a task" />
//         <button type="submit">ADD TASK</button>
//       </form>

//       <div className="task-container"></div>
//     </div>
//   );
// }

// export default App;
