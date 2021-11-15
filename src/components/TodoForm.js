import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import "./TodoForm.css";

const TITLE_NAME = "title";
const TEXTAREA_NAME = "description";

const TodoForm = () => {
  const { isFormView, setContext } = useContext(Context);
  const [todo, setTodo] = useState({
    id: 1,
    title: "",
    description: "",
    completed: false,
  });

  const clickSave = async () => {
    let todoList;
    if (todo.title.length > 0 && todo.description.length > 0) {
      if (localStorage.getItem("todoList")) {
        todoList = JSON.parse(localStorage.getItem("todoList"));
        todoList.push({ ...todo, id: todoList.length + 1 });
      } else {
        todoList = [todo];
      }
      localStorage.setItem("todoList", JSON.stringify(todoList));
    }

    setContext(!isFormView);
  };

  const clickCancel = () => {
    setContext(!isFormView);
  };

  const handleChange = (event) => {
    if (event) {
      const { name, value } = event.target;
      // console.log(name, value);
      setTodo({ ...todo, [name]: value });
    }
  };

  useEffect(() => {
    handleChange();
  });

  return (
    <form className="form-container">
      <input
        name={TITLE_NAME}
        type="text"
        value={todo.title}
        onChange={handleChange}
      />
      <textarea
        name={TEXTAREA_NAME}
        value={todo.description}
        onChange={handleChange}
      />
      <div className="form__buttons">
        <button type="button" className="btn-save" onClick={clickSave}>
          Save
        </button>
        <button type="button" className="btn-cancel" onClick={clickCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
