import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks');
    setTasks(response.data);
  };

  const addTask = async (task) => {
    const response = await axios.post('http://localhost:5000/tasks', task);
    setTasks([...tasks, response.data]);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const toggleComplete = async (id) => {
    const task = tasks.find((t) => t._id === id);
    const updatedTask = { ...task, completed: !task.completed };
    const response = await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
    setTasks(tasks.map((t) => (t._id === id ? response.data : t)));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleComplete={toggleComplete} />
    </div>
  );
};

export default App;
