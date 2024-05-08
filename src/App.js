import { useState, useRef } from 'react';
import './App.css';
import DetailsOfTasksCom from './DetailsOfTasksComp';

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

  // Variables to save input values
  let nameRef = useRef("")
  let placeRef = useRef("")
  let priorityRef = useRef(0)

  // Adding the task to the list
  let addTask = () => {
    let newTask = {
      name : nameRef.current.value,
      place : placeRef.current.value,
      priority : priorityRef.current.value,
    }

    setTask([...tasks, newTask])

    nameRef.current.value = ""
    placeRef.current.value = ""
    priorityRef.current.value = 0
  }

  let [taskSelected, setTaskSelected] = useState({})

  let onClickSelectedTask = (name) => {
    let task = tasks.find(t => t.name === name)
    setTaskSelected(task)
  }

  return (
    <>
      <div className='container'>
        <h1>List of tasks</h1>
        <ul className='taks-list'>
          { tasks.map (t =>
            <li key = {t.name} onClick={onClickSelectedTask}>
              <b>{t.name}</b>
            </li>)
          }
        </ul>  

        <div className='task-form'>
          <h2>Add a task</h2>
          <input ref = {nameRef} type="text" placeholder='name'></input>
          <input ref = {placeRef} type="text" placeholder='place'></input>
          <input ref = {priorityRef} type="number" placeholder='priority'></input>
          <button onClick={addTask}>Add the task</button>
        </div>
        

        <DetailsOfTasksCom task = {taskSelected}/>
      </div>
    </>
  );
}

export default App;
