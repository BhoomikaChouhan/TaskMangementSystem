// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => onDelete(task.id)}
          onUpdate={() => onUpdate(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
