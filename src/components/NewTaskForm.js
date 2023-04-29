import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: text,
      category: category,
    };

    onTaskFormSubmit(newTask);
   
  };  
  
  
  return (
    <form className="new-task-form">
      <label>
        Details
        <input 
        type="text" 
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
         />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => {
            if (category !== "All") {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            }
            return null;
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
