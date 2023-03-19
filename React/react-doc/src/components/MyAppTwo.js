import { useState } from "react";

export default function MyAppTwo() {
  const [count, setCount] = useState(10);

  function handleClick() {
    setCount(count + 10);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
