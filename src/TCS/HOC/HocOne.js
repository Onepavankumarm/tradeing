import React, { Component } from "react";
import Hoc from "./Hoc";
class HocOne extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.inccrement}>click maga</button>
      </div>
    );
  }
}

export default Hoc(HocOne);
