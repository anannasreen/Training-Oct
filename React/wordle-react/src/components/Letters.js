import React from "react";

const handleMouseOver = (e) => {
  console.log(e.target.value);
};

function GenerateLetters() {
  let td = [];
  for (let i = 65; i <= 90; i++) {
    td.push(
      <button
        className="letter"
        key={i}
        onMouseOver={handleMouseOver}
        value={String.fromCharCode(i)}
      >
        {String.fromCharCode(i)}
      </button>
    );
  }
  // console.log(td.length)
  return td;
}

export default GenerateLetters;
