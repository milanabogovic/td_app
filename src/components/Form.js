import './../css/Form.css';

const Form = ({ task, tasks, setTask, setTasks }) => {
    const createTask = (_task) => {
        let _tasks = [...tasks, { task: _task, complete: false, id: Date.now() }];
        setTasks(_tasks);
        localStorage.setItem("tasks", JSON.stringify(_tasks));
    }
    return ( 
        <>
            <div className="Form">
                <form onSubmit={e => { e.preventDefault(); createTask(e.target.children[0].value); }}>
                    <input type="text" placeholder="Enter a task here"></input>
                </form>
            </div>
            <hr></hr>
        </>
    );
}
 
export default Form;