import React, { Component } from "react";

class ChangeColor extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  shouldComponentUpdate() {
    return true;
  }

  ColorChange = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My favorite Color is {this.state.favoriteColor}</h1>
        <button type="button" onClick={this.ColorChange}>
          Change Color
        </button>
      </div>
    );
  }
}

export default ChangeColor;
