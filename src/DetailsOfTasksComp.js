import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let DetailsOfTasksCom = (props) => {
    let { tasks } = props
    let { name } = useParams();
    let [task, setTask] = useState(null)

    useEffect(() => {
        let candidate = tasks.find(t => t.name == name)

        if(candidate != null){
            setTask(candidate)
        } 
    })

    return (
        <div className="task-details">
            <h2>Details of Tasks</h2>
            <p>Name :{task?.name}</p>
            <p>Place :{task?.place}</p>
            <p>Priority :{task?.priority}</p>
        </div>
    )
}

export default DetailsOfTasksCom;