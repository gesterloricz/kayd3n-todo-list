import React, { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(event) {
        event.preventDefault();
        if (newTask.trim() !== "") {
            if (editIndex !== null) {
                const updatedTasks = [...tasks];
                updatedTasks[editIndex] = newTask;
                setTasks(updatedTasks);
                setEditIndex(null);
            } else {
                setTasks(t => [...tasks, newTask]);
            }
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function startEditTask(index) {
        setNewTask(tasks[index]);
        setEditIndex(index); 
    }

    return (
        <div className="todo-wrapper">
            <h1>To-Do List</h1>
            <form className="todo-form" onSubmit={addTask}>
                <input 
                    type="text" 
                    placeholder="What is the task today?" 
                    value={newTask} 
                    onChange={handleInputChange} 
                    className="todo-input"
                />
                <button type="submit" className="add-task-btn">{editIndex !== null ? 'Update Task' : 'Add Task'}</button>
            </form>
            
            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <li key={index} className="todo-item">
                        <span className="task-text">{task}</span>
                        <span className="icons">
                            <button className="edit-btn" onClick={() => startEditTask(index)}>&#9998;</button>
                            <button className="delete-btn" onClick={() => deleteTask(index)}>&#128465;</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
