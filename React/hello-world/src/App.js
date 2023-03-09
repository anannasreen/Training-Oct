// import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/Stylesheet";
import Inline from "./components/Inline";

function App() {
  return (
    <div className="App">
      <Inline />
      {/* <StyleSheet /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Greet name="Diana" heroName="Wonder Woman" />
      <Welcome name="Clark" heroName="Superman" /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Clark" heroName="Superman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Bruce" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
