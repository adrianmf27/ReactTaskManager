import { useRef } from 'react';

let CreateTaskComp = (props) => {
    let {tasks, setTask} = props

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

    return (
        <div className='task-form'>
          <h2>Add a task</h2>
          <input ref = {nameRef} type="text" placeholder='name'></input>
          <input ref = {placeRef} type="text" placeholder='place'></input>
          <input ref = {priorityRef} type="number" placeholder='priority'></input>
          <button onClick={addTask}>Add the task</button>
        </div>
    )
}

export default CreateTaskComp;