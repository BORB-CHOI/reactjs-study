import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Name extends Component {
  state = {
    name: "",
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="container">
        <form>
          <input
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Link to={{ pathname: "/main", state: { name } }}>
            <button>Next</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Name;
