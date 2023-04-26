import React from "react";

function Test() {
  const greeting = "greeting";

  return (
    <div className="container">
      <h1 id={greeting}>Hello World</h1>
      <p>I am writing JSX</p>

      <ul>
        <li>
            <button>
                <span className={'text-red'}>Grinning Face 😀</span>
            </button>
        </li>

        <li>
            <button>
                <span>Party Popper 🎉</span>
            </button>
        </li>

        <li>
            <button>
                <span>Woman Dancing 💃</span>
            </button>
        </li>
      </ul>
    </div>
  );
}

export default Test;
