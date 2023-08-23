import { React, Component } from "react";

class StateUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }
  handleClick = () => {
    // NORMAL FORM OF SETSTATE

    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });

    // COUNT --> 1

    //CALLBACK FORM OF SETSTATE

    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // this.setState((prevState) => ({ count: prevState.count + 1 }));

    // COUNT --> 3

    console.log(this.state.count);
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>{"Increment "}</button>
      </div>
    );
  }
}

export default StateUpdate;
