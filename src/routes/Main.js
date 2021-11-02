import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
  render() {
    const { location } = this.props;
    console.log(this.props);
    return <div className="container">안녕하세요 {location.state.name}님!</div>;
  }
}

export default Main;
