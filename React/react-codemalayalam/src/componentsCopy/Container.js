import React, { Component } from "react";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delHeader = () => {
    this.setState({ show: false });
  };

  render() {
    let myHeader;
    if (this.state.show) {
      myHeader = <Child />;
    }

    return (
      <div>
        {myHeader}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default Container;
