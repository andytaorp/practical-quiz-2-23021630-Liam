import React, { useState } from "react";
 
export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(description);
    setDescription(""); 
  };
 
  return (
<form onSubmit={handleSubmit}>
<input
        type="text"
        placeholder="New Task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
<button type="submit">Add Task</button>
</form>
  );
}
