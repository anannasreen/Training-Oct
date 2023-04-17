const lyrics = document.getElementById("lyrics");
const lines = document.querySelector(".lines");
const LINES = 99;

let j = 99;

for (let i = LINES; i >= 0; i--) {
  const line = document.createElement("p");
  lyrics.appendChild(line);
  // line.classList.add("lines");
  if (i > 1) {
    line.innerHTML = `${i} bottles of beer on the wall, ${i} bottles of beer.<br> Take ine down and pass it around, ${
      i - 1
    } bottles of beer on the wall.`;
  } else if ((i === 1)) {
    line.innerHTML = `${i} bottles of beer on the wall, ${i} bottles of beer.<br> Take ine down and pass it around, no bottles of beer on the wall.`;
  } else if ((i === 0)) {
    line.innerHTML = `no more bottles of beer on the wall, no more bottles of beer.<br> Take ine down and pass it around, ${j} bottles of beer on the wall.`;
  }
}

// const stanza = document.querySelectorAll(".lines");
// stanza.forEach((stanza) => {
//   j--;

//   stanza.innerHTML = `${j} bottles of beer on the wall,${j} bottles of beer.<br>Take one down and pass it around, ${
//     j - 1
//   } bottles of beer on the wall.`;
// });

// for (j = 99; j > 1; j--) {
//   const line =document.createElement('p')
//   lyrics.appendChild(line)
// }
