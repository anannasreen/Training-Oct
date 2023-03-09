import React from "react";

const Hello = () => {
  //   return (
  //     <div className = 'dummyClass>
  //       <h1>Hello Anan</h1>
  //     </div>
  //   );
  //   return React.createElement("div", null, <h1>Hello Anan</h1>);
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Anan")
  );
};

export default Hello;
