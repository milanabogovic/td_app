import { useState, useEffect } from "react";
import Form from "./components/Form";
import Tasklist from "./components/Tasklist";
import './css/App.css';

const App = () => {
    const [task, setTask] = useState(null);
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        if (localStorage.getItem("tasks")) {
            setTasks(JSON.parse(localStorage.getItem("tasks")));
        }
    }, [])
    return (
        <div className="App">
            <Form task = { task } tasks = { tasks } setTask = { setTask } setTasks = { setTasks } />
            <Tasklist tasks = { tasks } setTasks = { setTasks } />
        </div>
    );
}

export default App;