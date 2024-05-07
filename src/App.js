import { useState, useRef } from 'react';
import './App.css';

function App() {

  // List variable to save the different tasks
  let [task, setTask] = useState(
    [
      {
        name: "Task1",
        place: "School",
        priority: 0
      },
      {
        name: "Task2",
        place: "House",
        priority: 1
      }
    ]
  )

  // Variables to save input values
  let nameRef = useRef("")
  let placeRef = useRef("")
  let priorityRef = useRef(0)

  let formRef = useRef()

  // Adding the task to the list
  let addTaskWithReferences = () => {
    let newTask = {
      name : nameRef.current.value,
      place : placeRef.current.value,
      priority : priorityRef.current.value,
    }

    setTask([...task, newTask])

    nameRef.current.value = ""
    placeRef.current.value = ""
    priorityRef.current.value = 0
  }


  // Adding the task to the list with form
  let addTaskWithFormReferences = () => {
    let formData = new FormData(formRef.current)

    let newTask = {
      name : formData.get("name"),
      place : formData.get("place"),
      priority : formData.get("priority")
    }
    
    setTask([...task, newTask])
  }

  return (
    <>
      <div>
        <h2>Add a task</h2>
        <input ref = {nameRef} type="text" placeholder='name'></input>
        <input ref = {placeRef} type="text" placeholder='place'></input>
        <input ref = {priorityRef} type="number" placeholder='priority'></input>
        <button onClick={addTaskWithReferences}>Add the task</button>


        <h2>Add a task with a Form Ref</h2>
        <form ref={formRef}>
          <input name="name" type="text" placeholder='name'></input>
          <input name="place" type="text" placeholder='place'></input>
          <input name="priority" type="number" placeholder='priority'></input>
        </form>
        <button onClick={addTaskWithFormReferences}>Add the task</button>


        <ul>
          { task.map (t =>
            <li>
              <b>{t.name}</b>
              <div>Place {t.place}</div>
              <div>Place: {t.place}</div>
            </li>)
          }
        </ul>       
      </div>
    </>
  );
}

export default App;
