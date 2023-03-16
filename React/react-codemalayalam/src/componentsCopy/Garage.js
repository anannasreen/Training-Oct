import React, { Component } from "react";

class Car extends Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </div>
    );
  }
}

export default Garage