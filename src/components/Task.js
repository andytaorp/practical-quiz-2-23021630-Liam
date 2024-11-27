import React from "react";

export default function Task({ task, onToggleTask, onDeleteTask }) {
    return (
      <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)} 
        />
        {task.text}
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </li>
    );
  }
