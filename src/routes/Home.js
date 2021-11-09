import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [name, setName] = useState("");

  const getName = () => setName(localStorage.getItem("name"));

  const handleChange = (event) => (event ? setName(event.target.value) : null);

  const handleClick = () => localStorage.setItem("name", name);

  useEffect(() => {
    getName();
  }, []);

  useEffect(() => {
    handleChange();
  }, [name]);

  return (
    <div className="home-container">
      <form>
        <input
          id="name"
          placeholder="이름"
          value={name}
          onChange={handleChange}
        />
        <Link to={{ pathname: "/main", state: { name } }}>
          <button type="submit" onClick={handleClick}>
            Next
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
