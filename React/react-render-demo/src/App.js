import React from "react";
import "./App.css";
import { ChildA } from "./components/Context/ContextChildren";
import { ContextParent } from "./components/Context/ContextParent";
import { ArrayUseState } from "./components/ImmutableState/ArrayUseState";
import { ObjectUseState } from "./components/ImmutableState/ObjectUseState";
import { ParentFour } from "./components/IncorrectOptimizations/ParentFour";
import { ParentThree } from "./components/IncorrectOptimizations/ParentThree";
import { ChildOne } from "./components/Optimization/ChildOne";
import { GrandParent } from "./components/Optimization/GrandParent";
import { ParentOne } from "./components/Optimization/ParentOne";
import { ParentTwo } from "./components/Optimization/ParentTwo";
import { Parent } from "./components/ParentChild/Parent";
import { UseReducer } from "./components/UseReducer/UseReducer";
import { UseState } from "./components/UseState/UseState";

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA />
      </ContextParent>
      {/* <ParentFour /> */}
      {/* <ParentThree /> */}
      {/* <ParentTwo /> */}
      {/* <GrandParent /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <Parent /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseState /> */}
      {/* <UseReducer /> */}
      {/* <UseState /> */}
    </div>
  );
}

export default App;
