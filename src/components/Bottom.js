import React from "react";
import "./Bottom.css";

const Bottom = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="bottom-container">
      <div className="area-remove">Remove</div>
      <div className="area-add">Add</div>
      <button onClick={handleClick}>Test Edit</button>
    </div>
  );
};

export default Bottom;
