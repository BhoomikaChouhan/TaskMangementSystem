// src/App.js
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm'; // Import TaskForm component for adding tasks
import axios from 'axios';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8080/api/tasks')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  // Function to handle task deletion
  const handleDelete = (taskId) => {
    // Implement task deletion logic
    axios.delete(`http://localhost:8080/api/tasks/${taskId}`)  // Update the URL
      .then(() => {
        // Update tasks state after successful deletion
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      })
      .catch((error) => console.error('Error deleting task:', error));
  };

  // Function to handle task update (completion status toggle)
  const handleUpdate = (taskId) => {
    try {
      // Update the task on the backend
      axios.put(`http://localhost:8080/api/tasks/${taskId}`, {});
      // Update the local state to reflect the update
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Function to handle task addition
  const handleAdd = (taskText) => {
    // Implement task addition logic
    axios.post('http://localhost:8080/api/tasks', { title: taskText, completed: false })  // Update the URL
      .then((response) => {
        // Update tasks state after successful addition
        setTasks((prevTasks) => [...prevTasks, response.data]);
      })
      .catch((error) => console.error('Error adding task:', error));
  };

  return (
    <div>
      <h1><center>Task Manager</center></h1>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
};

export default App;
