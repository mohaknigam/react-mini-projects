import React, { Component } from "react";

class ForceUpdateClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // Example of using forceUpdate to trigger re-render
  incrementCountUsingForceUpdate = () => {
    this.state.count = this.state.count + 1; // Directly modify the state (not recommended)
    this.forceUpdate(); // Trigger a re-render using forceUpdate
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCountUsingForceUpdate}>
          {"Increment "}
        </button>
      </div>
    );
  }
}

export default ForceUpdateClass;
