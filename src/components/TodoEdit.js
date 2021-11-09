import { useState } from "react";

// create react functional component
const TodoEdit = ({ onSave, onCancel }) => {
  const [value, setValue] = useState("todo.title");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default TodoEdit;
