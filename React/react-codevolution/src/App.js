import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Column from "./components/Column";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/clickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterTwo from "./components/CounterTwo";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserProvider value="Anan">
          <ComponentC />
        </UserProvider>
        {/* <CounterTwo>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo>

        <CounterTwo>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterTwo> */}

        {/* <ClickCounterTwo />;
        <HoverCounterTwo />
        <User render={(isLoggedIn) => (isLoggedIn ? "Anan" : "Guest")} /> */}
        {/* <ClickCounter name='Anan'/>
        <HoverCounter /> */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman"></Hero>
          <Hero heroName="Superman"></Hero>
          <Hero heroName="Joker"></Hero>
        </ErrorBoundary> */}
        {/* <FRParentInput/> */}
        {/* <FocusInput/> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp/> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifecycleA/> */}
        {/* <Form /> */}
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Inline /> */}
        {/* <Stylesheet primary={true} /> */}
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick />
        <ClassClick/> */}
        {/* <Counter /> */}
        {/* <Message/> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is Children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman"></Welcome>
        <Welcome name="Clark" heroName="Superman"></Welcome>
        <Welcome name="Diana" heroName="Wonder Woman" /> */}
        {/* <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman"></Welcome> */}
        {/* <Welcome /> */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
