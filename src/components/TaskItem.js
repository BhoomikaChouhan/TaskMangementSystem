// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onDelete, onUpdate }) => {
  return (
    <li>
      <span>{task.text}</span>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onUpdate}>Update</button>
    </li>
  );
};

export default TaskItem;
