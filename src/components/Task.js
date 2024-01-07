// components/Task.js
import React from 'react';

const Task = ({ task, onDelete, onUpdate }) => {
  return (
    <div>
      <span>{task.text}</span>
      <button onClick={() => onUpdate(task.id)}>Update</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
