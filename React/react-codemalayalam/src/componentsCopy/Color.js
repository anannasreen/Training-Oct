import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    return { favoriteColor: props.favcol };
  }

  render() {
    return <h2>My Favorite Color is {this.state.favoriteColor}</h2>;
  }
}

export default Header;
