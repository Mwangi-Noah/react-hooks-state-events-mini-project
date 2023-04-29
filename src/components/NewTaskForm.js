import React, { useState } from "react";

function NewTaskForm({ categories, onFormSubmit }) {
  const [formData, setFormData] = useState({
    text: "",
    category: "Food",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: formData.text,
      category: formData.category,
    };

    onFormSubmit(newTask);
    setFormData({
      text: "",
      category: "Food",
    });
   
  };  
  
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text"
        value={formData.text}
        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
         />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
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
