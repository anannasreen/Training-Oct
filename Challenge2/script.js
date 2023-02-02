const btn = document.getElementById("btn");
const boxes = document.querySelectorAll(".box");
const answer = document.getElementById("answer");
const add = document.getElementById("add");
const container = document.getElementById("container");

add.addEventListener("click", () => {
  const inputBox = document.createElement("input");
  container.appendChild(inputBox);
  inputBox.classList.add("box");
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box, idx) => {
    box.addEventListener("keydown", (e) => {
      const boxes = document.querySelectorAll(".box");
      if (e.key === "Enter") {
        val = box.value;
        if (idx < boxes.length - 1) {
          boxes[idx + 1].focus();
        } else if ((idx = boxes.length - 1)) {
          boxes[idx].focus();
        }
      }
    });
  });
});

boxes[0].focus();

boxes.forEach((box, idx) => {
  box.addEventListener("keydown", (e) => {
    const boxes = document.querySelectorAll(".box");
    if (e.key === "Enter") {
      val = box.value;
      if (idx < boxes.length - 1) {
        boxes[idx + 1].focus();
      } else if ((idx = boxes.length - 1)) {
        boxes[idx].focus();
      }
      console.log(val);
    }
  });
});

btn.addEventListener("click", () => {
  const boxes = document.querySelectorAll(".box");
  let items = [];
  boxes.forEach((box) => {
    val = box.value;
    items.push(+val);
    console.log(items);
  });
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
  if (max === 0) {
    answer.innerHTML = "Enter a valid number";
  } else {
    answer.innerHTML = `The greatest number is, ${max}, at the position, ${greatestNumber()}`;
  }
});
