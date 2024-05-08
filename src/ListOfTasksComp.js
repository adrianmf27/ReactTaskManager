
let ListOfTasksComp = (props) => {
    let { tasks, setTask, setTaskSelected } = props

    let onClickSelectedTask = (name) => {
        let task = tasks.find(t => t.name == name)
        setTaskSelected(task)
    }

    let deletetTaskSelected = (name) => {
        let otherTasks = tasks.filter(t => t.name != name)
        setTask(otherTasks)
    }

    return (
        <div>
            <h1>List of tasks</h1>
            <ul className='task-list'>
                { tasks.map (t =>
                    <li key = {t.name} onClick={ () => {onClickSelectedTask(t.name)}}>
                        {t.name}
                        
                        <button className="delete-button" onClick={() => {deletetTaskSelected(t.name)}}>
                            Delete Task
                        </button>
                    </li>)
                }
            </ul> 
        </div>
    )
}

export default ListOfTasksComp;