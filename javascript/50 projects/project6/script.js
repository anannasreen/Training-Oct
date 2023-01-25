const boxes = document.getElementById("boxes");
// const boxesAll=document.querySelectorAll('.box')
const boxEls = document.querySelectorAll(".box");
const BOX = 10;

for (let i = 0; i < BOX; i++) {
  const box = document.createElement("div");
  document.body.appendChild(box);
  box.classList.add("box");
  box.innerHTML = `<h2>Content</h2>`;
}

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxEls.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
