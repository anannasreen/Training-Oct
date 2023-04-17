const btn = document.getElementById("btn");
const boxes = document.querySelectorAll(".box");
const answer = document.getElementById("answer");
const add = document.getElementById("add");
const container = document.getElementById("container");

// let listOfNum = [610, 201, 211, 408, 840];
// let max = listOfNum[0];

// function greatestNumber() {
//   for (i = 1; i < listOfNum.length; i++) {
//     if (listOfNum[i] > max) {
//       max = listOfNum[i];
//     }
//   }
//   return listOfNum.indexOf(max);
// }
// console.log(greatestNumber(), max);
// console.log("The greatest number is", max, "at the position", greatestNumber());

// btn.addEventListener("click", () => {
//   answer.innerHTML = `The greatest number is, ${max}, at the position, ${greatestNumber()}`;
// });

// let items = [];

// function getNum() {
//   let x = boxes.value;
//   boxes.forEach((box) => {
//     box.addEventListener("input", () => {
//       items.push(x);
//     });
//   });
//   return items;
// }
// console.log(getNum());

// boxes.addEventListener("keydown", function (e) {
//   if (e.key === "Enter") {
//     function getNum() {
//       val = boxes.value;
//       return val;
//       // boxes.forEach((box))
//     }
//     console.log(getNum());
//   }
// });

add.addEventListener("click", () => {
  const inputBox = document.createElement("input");
  container.appendChild(inputBox);
  inputBox.classList.add("box");
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box, idx) => {
    box.addEventListener("keydown", (e) => {
      const boxes = document.querySelectorAll(".box");
      if (e.key === "Enter") {
        function getNum() {
          val = box.value;
          return val;
        }
        // if (idx < boxes.length - 1) {
        //   boxes[idx + 1].focus();
        // } else if ((idx = boxes.length - 1)) {
        //   boxes[idx].focus();
        // }
        console.log(getNum());
        // items.push(+getNum());
        // console.log(items);
      }
    });
  });
});

boxes[0].focus();
let items = [];

boxes.forEach((box, idx) => {
  box.addEventListener("keydown", (e) => {
    const boxes = document.querySelectorAll(".box");
    if (e.key === "Enter") {
      function getNum() {
        val = box.value;
        return val;
      }
      if (idx < boxes.length - 1) {
        boxes[idx + 1].focus();
      } else if ((idx = boxes.length - 1)) {
        boxes[idx].focus();
      }
      console.log(getNum());
      items.push(+getNum());
      console.log(items);
    }
  });
});

btn.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  let max = items[0];

  function greatestNumber() {
    console.log(items);
    for (i = 1; i < items.length; i++) {
      if (items[i] > max) {
        max = items[i];
      }
    }
    return items.indexOf(max);
  }
  console.log(greatestNumber(), max);
  // console.log(
  //   "The greatest number is",
  //   max,
  //   "at the position",
  //   greatestNumber()
  // );
  answer.innerHTML = `The greatest number is, ${max}, at the position, ${greatestNumber()}`;
});
