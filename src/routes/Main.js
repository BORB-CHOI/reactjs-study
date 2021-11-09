import React, { useContext } from "react";
import TodoHead from "../components/Top";
import TodoBottom from "../components/Bottom";
import TodoList from "../components/TodoList";
import TodoEdit from "../components/TodoEdit";
import "./Main.css";

const Main = (data) => {
  const { location: state } = data;
  const isEdit = true;

  return (
    <div className="main-container">
      <TodoHead props={state} />
      {isEdit ? <TodoList /> : <TodoEdit />}
      <TodoBottom />
    </div>
  );
};

export default Main;
