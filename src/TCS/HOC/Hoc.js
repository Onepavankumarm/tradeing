import React from "react";

const Hoc = (NewCmp) => {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };
    inccrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return <NewCmp count={this.state.count} inccrement={this.inccrement} />;
    }
  }
  return NewComponent;
};

export default Hoc;
