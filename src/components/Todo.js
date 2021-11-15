import React, { useState, useEffect } from "react";
import "./Todo.css";

const Todo = ({ data }) => {
  const [todo, setTodo] = useState(data);

  ///////////////////////////////////////////////////////////////////////////////
  const MoveToInProgress = () => {};
  const MoveToDone = () => {};

  const clickMove = () => {
    if (todo.completed) {
      MoveToInProgress();
    } else {
      MoveToDone();
    }
  };
  ///////////////////////////////////////////////////////////////////////////////

  const clickRemove = (event) => {
    // 삭제한 후에 다시 불러오는 코드
    const todoList = localStorage.getItem("todoList");
    const todoListArray = JSON.parse(todoList);
    const newTodoList = todoListArray.filter((item) => item.id !== todo.id);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));

    event.target.parentNode.parentNode.remove();
  };

  return (
    <li className="TodoItem">
      <div className="text">{todo.title}</div>
      <div className="item__buttons">
        <button className="btn-move">Move</button>
        <button className="btn-remove" onClick={clickRemove}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default Todo;
