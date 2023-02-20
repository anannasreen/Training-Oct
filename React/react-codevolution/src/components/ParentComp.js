import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anan",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Anan",
      });
    }, 2000);
  }

  render() {
    console.log(
      "************************Parent Comp***************************"
    );
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
