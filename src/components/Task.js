import React from "react";

function Task({ index, category, text, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDelete(index)}>
        X
      </button>
    </div>
  );
}

export default Task;