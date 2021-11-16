import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
  const { isFormView, setContext } = useContext(Context);
  const [inProgressTodoList, setInProgressTodoList] = useState([]);
  const [doneTodoList, setDoneTodoList] = useState([]);

  const getTodoList = async () => {
    const todoList = JSON.parse(localStorage.getItem("todoList"));
    let inProgressList = [];
    let doneList = [];

    if (todoList) {
      await todoList.forEach((todo) => {
        if (todo.completed) {
          doneList.push(todo);
        } else {
          inProgressList.push(todo);
        }
      });
      setInProgressTodoList(inProgressList);
      setDoneTodoList(doneList);
    }
  };

  const clickAdd = () => {
    setContext(!isFormView);
  };

  ///////////////////////////////////////////////////////////////////////////////
  const clickEdit = () => {
    setContext(!isFormView); // 이건 남겨주세요! form view로 전환하는 코드 입니다.

    // 선택한 Todo의 값을 넘기는 코드를 작성해주세요!
  };
  ///////////////////////////////////////////////////////////////////////////////

  const enableDragSort = (listClass) => {
    const sortableLists = document.getElementsByClassName(listClass);
    Array.prototype.map.call(sortableLists, (list) => {
      // console.log(list);
      enableDragList(list);
    });
  };

  const enableDragList = (list) => {
    Array.prototype.map.call(list.children, (item) => {
      // console.log(item);
      enableDragItem(item);
    });
  };

  const enableDragItem = (item) => {
    item.setAttribute("draggable", true);
    // console.dir(item);
    item.ondrag = handleDrag;
    item.ondragend = handleDrop;
  };

  const handleDrag = (item) => {
    const selectedItem = item.target,
      list = selectedItem.parentNode,
      x = window.event.clientX,
      y = window.event.clientY;

    selectedItem.classList.add("drag-sort-active");
    let swapItem =
      document.elementFromPoint(x, y) === null
        ? selectedItem
        : document.elementFromPoint(x, y);

    if (list === swapItem.parentNode) {
      swapItem =
        swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
      list.insertBefore(selectedItem, swapItem);
    }
  };

  const handleDrop = (item) => {
    // console.log(item);
    item.target.classList.remove("drag-sort-active");
  };

  useEffect(() => {
    enableDragSort("drag-sort-enable");
  });

  useEffect(() => {
    getTodoList();
  }, []);

  return (
    <div className="list-container">
      <div className="counts">
        <div className="inProgress-count">
          할 일 {inProgressTodoList.length}개 남음
        </div>
        <div className="done-count">{doneTodoList.length}개 완료 됨</div>
      </div>
      <div className="Todos">
        <ul className="in-progress-todo-list drag-sort-enable">
          {inProgressTodoList.map((data) => (
            <Todo key={data.id} data={data} />
          ))}
        </ul>
        <ul className="done-todo-list drag-sort-enable">
          {doneTodoList.map((data) => (
            <Todo key={data.id} data={data} />
          ))}
        </ul>
      </div>
      <div className="list__buttons">
        <button className="btn-add" onClick={clickAdd}>
          ADD
        </button>
        <button className="btn-edit" onClick={clickEdit}>
          EDIT
        </button>
      </div>
    </div>
  );
};

export default TodoList;
