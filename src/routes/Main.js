import React, { Component } from "react";
import "./Main.css";
import {Link} from "react-router-dom";


class Main extends Component {
  render() {
    const { location } = this.props;
    console.log(this.props);
    return (
        <div className="container">
          <div>
            안녕하세요 {location.state.name}님!
          </div>
            <Link to= "/todoTemplate">
                <button>To do List</button>
            </Link>
        </div>
  );
  }
}

export default Main;
