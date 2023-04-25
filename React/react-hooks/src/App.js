import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";
import DataFetching from "./components/DataFetching";
import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";
import ReducerCounter from "./components/ReducerCounter";
import CounterTwo from "./components/CounterTwo";
// import logo from "./logo.svg";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import HookCounterFour from "./components/HookCounterFour";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterTwo from "./components/HookCounterTwo";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterOne />
      <HookCounterFour /> */}
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UserContext.Provider value={"Anan"}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <ReducerCounter /> */}
      <CounterTwo />
    </div>
  );
}

export default App;
