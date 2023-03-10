import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Vishwas",
      });
    }, 2000);
  }

  render() {
    console.log(
      "**************Parent Component Render*************************"
    );
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
 