import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [name, setName] = useState("");

  const getName = () =>
    setName(localStorage.getItem("name") ? localStorage.getItem("name") : "");

  const handleChange = (event) => (event ? setName(event.target.value) : null);

  const handleClick = async () => {
    localStorage.setItem("name", name);
  };

  useEffect(() => {
    getName();
  }, []);

  useEffect(() => {
    handleChange();
  }, [name]);

  return (
    <div className="home-container">
      <form>
        <div id="title">
          Welcome. <br/>Make your own To-do-list.
        </div>
        <input
          id="name"
          placeholder="  name"
          value={name}
          onChange={handleChange}
        />
        <Link to={{ pathname: "/main", state: { name } }}>
          <button id="btnNext" type="submit" onClick={handleClick}>
            Next
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
