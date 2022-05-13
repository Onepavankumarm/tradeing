import React, { Component } from "react";
import Hoc from "./Hoc";
class HocTwo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.inccrement}>Click</button>
      </div>
    );
  }
}

export default Hoc(HocTwo);
