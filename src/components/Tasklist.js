import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './../css/Tasklist.css';

const Tasklist = ({ tasks, setTasks }) => {
    const deleteTask = (id) => {
        let _tasks = tasks.filter((task) => task.id !== id);
        setTasks(_tasks);
        localStorage.setItem("tasks", JSON.stringify(_tasks));
    }
    const completeToggle = (id) => {
        let _tasks = tasks;
        _tasks[id].complete = !_tasks[id].complete;
        setTasks([..._tasks]);
        localStorage.setItem("tasks", JSON.stringify(_tasks));
    }
    return ( 
        <div className="Tasklist">
            <ul>
            {
                tasks.map((task, index) => (
                    <li key={ index } id={ index }>
                        {task.complete ?
                            (
                                <>
                                    <p style={{color: "#e4e4e4"}}>{task.task}</p>
                                    <div>
                                        <FontAwesomeIcon icon={faCircleCheck} className="icon" onClick={ e => completeToggle(e.target.parentElement.parentElement.id) } style={{color: "rgba(80, 226, 165, 0.5)"}}/>
                                        <FontAwesomeIcon icon={faTrashAlt} className="icon__trash" onClick={ () => { deleteTask(task.id); } } />
                                    </div>
                                </>
                            ):
                            (
                                <>
                                    <p>{task.task}</p>
                                    <div>
                                        <FontAwesomeIcon icon={faCircle} className="icon" onClick={ e => completeToggle(e.target.parentElement.parentElement.id) } />  
                                        <FontAwesomeIcon icon={faTrashAlt} className="icon__trash" onClick={ () => { deleteTask(task.id); } } />
                                    </div>
                                </>
                            )}
                    </li>
                ))
            }
            </ul>
        </div>
    );
}
 
export default Tasklist;