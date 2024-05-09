import { Link } from 'react-router-dom';

let ListOfTasksComp = (props) => {
    let { tasks, setTask } = props

    let deletetTaskSelected = (name) => {
        let otherTasks = tasks.filter(t => t.name != name)
        setTask(otherTasks)
    }

    return (
        <div>
            <h1>List of tasks</h1>
            <ul className='task-list'>
                { tasks.map (t =>
                    <li key = {t.name}>
                        <Link to = {"/detailOfTasks/" + t.name}>{t.name}</Link>               
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