import React, { useState } from "react";
import { MemoizedChildA } from "./ContextChildren";

export const CounterContext = React.createContext();
const CountProvider = CounterContext.Provider;

export const ContextParent = ({children}) => {
  const [count, setCount] = useState(0);

  console.log("ContextParent Render");
  return (
    <>
      <button onClick={() => (c) => c + 1}>Count {count}</button>
      {/* <ChildA /> */}
      <CountProvider value={count}>
        {/* <MemoizedChildA /> */}
        {children}
      </CountProvider>
    </>
  );
};
