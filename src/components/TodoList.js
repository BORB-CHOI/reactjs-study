import React, { useEffect } from "react";
import Todo from "./Todo";
import "./TodoList.css";

const fakeInProgressTodos = [
  { id: 1, title: "산책" },
  { id: 2, title: "react 공부하기" },
  { id: 3, title: "강의 듣기" },
  { id: 4, title: "과제 하기" },
];

const fakeDoneTodos = [
  { id: 1, title: "산책" },
  { id: 2, title: "react 공부하기" },
  { id: 3, title: "강의 듣기" },
  { id: 4, title: "과제 하기" },
];

const TodoList = () => {
  const [inProgressTodos] = React.useState(fakeInProgressTodos);
  const [doneTodos] = React.useState(fakeDoneTodos);

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

  return (
    <div className="todoList-container">
      <div className="counts">
        <div className="inProgress-count">
          할 일 {inProgressTodos.length}개 남음
        </div>
        <div className="done-count">{fakeDoneTodos.length}개 완료 됨</div>
      </div>
      <div className="Todos">
        <ul className="inProgressTodos drag-sort-enable">
          {inProgressTodos.map(({ id, title }) => (
            <Todo key={id} title={title} />
          ))}
        </ul>
        <ul className="doneTodos drag-sort-enable">
          {doneTodos.map(({ id, title }) => (
            <Todo key={id} title={title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
