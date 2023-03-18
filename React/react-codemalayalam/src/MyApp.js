import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DummyPage from "./pages/DummyPage";
import Usage from "./pages/Usage";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: "home",
    };
  }

  handleMenuSelect = (value) => {
    console.log(value);
    this.setState({
      currentSelected: value,
    });
  };

  getPage() {
    const { currentSelected } = this.state;

    switch (currentSelected) {
      case "home":
        return <HomePage />;
      case "usage":
        return <Usage key="usage" name="Usage" />;
      case "settings":
        return <DummyPage key="settings" name="Settings" />;
      case "logout":
        return <DummyPage key="logout" name="Logout" />;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="app">
        <Header onMenuSelect={this.handleMenuSelect} />
        <div className="app-body">
          {/* <HomePage /> */}
          {this.getPage()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default MyApp;
