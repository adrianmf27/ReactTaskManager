import { useState, useRef } from 'react';
import './App.css';
import DetailsOfTasksCom from './DetailsOfTasksComp';
import ListOfTasksComp from './ListOfTasksComp';
import CreateTaskComp from './CreateTaskComp';


function App() {
  // List variable to save the different tasks
  let [tasks, setTask] = useState(
    [
      {
        name: "Task1",
        place: "School",
        priority: 0
      },
      {
        name: "Clean",
        place: "House",
        priority: 1
      }
    ]
  )

  let [taskSelected, setTaskSelected] = useState({})


  return (
    <>
      <div className='container'>
        <ListOfTasksComp tasks = {tasks} setTask = {setTask} setTaskSelected={setTaskSelected}/>
        <CreateTaskComp tasks = {tasks} setTask = {setTask}/>              
        <DetailsOfTasksCom task = {taskSelected}/>
      </div>
    </>
  );
}

export default App;
