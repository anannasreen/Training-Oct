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
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import RegComp from "./components/RegComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterTwo from "./components/CounterTwo";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";
import MyDiv from './components/MyDiv'

function App() {
  return (
    <div className="App">
      <MyDiv title="hello" subtitle="wonderful" />
      <MyDiv title="bye" subtitle="not wonderful" />
      <MyDiv title="this" subtitle="not" />
      <MyDiv title="somany" subtitle="something" />
    </div>
  );
}

export default App;

{
  /* <UserProvider value='Vishwas'>
        <ComponentC />
      </UserProvider> */
}
{
  /* <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      /> */
}
{
  /* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => (isLoggedIn ? "Vishwas" : "Guest")} /> */
}
{
  /* <ClickCounter name='Vishwas' />
      <HoverCounter /> */
}
{
  /* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" /> 
      </ErrorBoundary> */
}
{
  /* <PortalDemo /> */
}
{
  /* <FRParentInput /> */
}
{
  /* <FocusInput /> */
}
{
  /* <RefsDemo /> */
}
{
  /* <ParentComp /> */
}
{
  /* <RegComp />
      <PureComp /> */
}
{
  /* <Table /> */
}
{
  /* <FragmentDemo /> */
}
{
  /* <LifecycleA /> */
}
{
  /* <Form /> */
}
{
  /* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */
}
{
  /* <Inline /> */
}
{
  /* <StyleSheet /> */
}
{
  /* <NameList /> */
}
{
  /* <UserGreeting /> */
}
{
  /* <ParentComponent /> */
}
{
  /* <EventBind /> */
}
{
  /* <FunctionClick />
      <ClassClick /> */
}
{
  /* <Greet name="Diana" heroName="Wonder Woman" />
      <Welcome name="Clark" heroName="Superman" /> */
}
{
  /* <Counter /> */
}
{
  /* <Message /> */
}
{
  /* <Greet name="Clark" heroName="Superman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Bruce" heroName="Batman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */
}
{
  /* <Hello /> */
}
