

let DetailsOfTasksCom = (props) => {
    let { task } = props

    return (
        <div className="task-details">
            <h2>Details of Tasks</h2>
            <p>Name :{task.name}</p>
            <p>Place :{task.place}</p>
            <p>Priority :{task.priority}</p>
        </div>
    )
}

export default DetailsOfTasksCom;