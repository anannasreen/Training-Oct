import React, { useState } from "react";
import { MemoizedChildFour } from "./ChildFour";
// import { MemoizedChildThree } from "./ChildThree";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Anan");

  console.log("ParentThree Render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Codevolution")}>Change name</button>
      <MemoizedChildFour name={name} />
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
    </div>
  );
};
