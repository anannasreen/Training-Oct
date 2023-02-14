import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const a = <div id="my-hello">hello</div>;

// const a = React.createElement(
//   "div",
//   {
//     id: "my-hello",
//   },
//   // "HELLO"
//   React.createElement("h1",{}, "My Title")
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const a = (
//   <div id="my-hello">
//     <h1>MY Title</h1>
//   </div>
// );

// ReactDOM.render(a, document.getElementById("root"));

// const arr = ["one", "two", "three"];
// ReactDOM.render(
//   <div id="my-hello" className={arr.join(" ")}>
//     HELLO
//   </div>,
//   document.getElementById("root")
// );

// const arr = ["one", "two", "three"];
// const disabled = true;

const obj = {
  backgroundColor: "Green",
  padding: "5px",
  color: "white",
  borderRadius: "2px",
};
ReactDOM.render(<div style={obj}>HELLO</div>, document.getElementById("root"));
