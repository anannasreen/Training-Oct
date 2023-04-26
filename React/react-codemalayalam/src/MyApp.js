import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePageFn from "./pages/HomePageFn";
import Usage from "./pages/Usage";
import DummyPage from "./pages/DummyPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import Settings from './pages/Settings'
import HomePage from './pages/HomePage'

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: "home",
    };
  }

  handleMenuSelect = (value) => {
    // console.log(value);
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
        return <Usage />;
      case "settings":
        return <Settings />;
      case "logout":
        return <DummyPage key="logout" name="Logout" />;
      default:
        break;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Header onMenuSelect={this.handleMenuSelect} />
          <div className="app-body">{this.getPage()}</div>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default MyApp;
