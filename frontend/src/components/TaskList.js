import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <h3>{task.name}</h3>
          <p>Priority: {task.priority}</p>
          <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
          <p>{task.description}</p>
          <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
          <button onClick={() => onToggleComplete(task._id)}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
          <button onClick={() => onDeleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
