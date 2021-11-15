import React, { useContext } from "react";
import TodoHead from "../components/Top";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { Context } from "../context";
import "./Main.css";

const Main = (data) => {
  const {
    location: { state },
  } = data;
  const { isFormView } = useContext(Context);

  if (!state.name) {
    window.location.href = "/";
  }

  return (
    <div className="main-container">
      <TodoHead state={state} />
      {isFormView ? (
        <TodoForm state={state} />
      ) : (
        <TodoList state={state} />
      )}{" "}
    </div>
  );
};

export default Main;
