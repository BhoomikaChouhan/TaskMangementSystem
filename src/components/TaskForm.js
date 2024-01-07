// src/components/TaskForm.js
import React, { useState } from 'react';
import './TaskForm.css'; // Import the CSS file

const TaskForm = ({ onAdd }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(taskText);
    setTaskText('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label className="form-label">
        New Task:
        <input
          className="form-input"
          type="text"
          value={taskText}
          onChange={handleInputChange}
        />
      </label>
      <button className="form-button" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
