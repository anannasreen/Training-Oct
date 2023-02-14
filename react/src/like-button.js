// import { useState } from "react";

// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onclick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// function Board({ xIsNext, squares, onPlay }) {
//     function handleClick(i) {
//         if(calculateWinner(squares)) {}
//     }
// }

// function MyButton() {
//     return (
//         <button>I'm button</button>
//     )
// }

"use strict";

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  return React.createElement(
    "button",
    {
      onClick: () => setLiked(true),
    },
    "Like"
  );
}

const rootNode = document.getElementById("like-button-root");
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));
