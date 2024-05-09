import { useState, useRef } from 'react';
import './App.css';
import DetailsOfTasksCom from './DetailsOfTasksComp';
import ListOfTasksComp from './ListOfTasksComp';
import CreateTaskComp from './CreateTaskComp';
import { Routes, Route, Link } from 'react-router-dom';


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


  return (
    <>
      <div className='container'>

        <nav>
          <ul className='navbar'>
            <li><Link to="/">Task</Link></li>
            <li><Link to="/createTasks">Add Task</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={
            <ListOfTasksComp tasks = {tasks} setTask = {setTask}/>}>
          </Route>

          <Route path="/createTasks" element={
            <CreateTaskComp tasks = {tasks} setTask = {setTask}/>}>
          </Route>

          <Route path="/detailOfTasks/:name" element={
            <DetailsOfTasksCom tasks = {tasks}/>}>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
