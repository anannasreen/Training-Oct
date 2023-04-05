import React, { useEffect, useState } from "react";
import "./Wordle.css";

function CreateWordle() {
  const [letter, setLetter] = useState([]);

  return (
    <div className="container">
      <div className="content">
        <div className="letter-box">
            <button className="letter">A</button>
        </div>
      </div>
    </div>
  );
}

export default CreateWordle;
