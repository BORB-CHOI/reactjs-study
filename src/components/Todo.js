import React from "react";
import "./Todo.css";

const Todo = ({ title }) => {
  return (
    <li className="TodoItem">
      <div className="text">{title}</div>
    </li>
  );
};

export default Todo;
