import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookCounter from "./components/HookCounter";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";

function App() {
  return (
    <div className="App">
      {/* <HookMouse/> */}
      <MouseContainer/>
      {/* <ClassMouse/> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
