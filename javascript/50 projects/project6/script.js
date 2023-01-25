const boxes = document.getElementById("boxes");
// const boxesAll=document.querySelectorAll('.box')
const BOX = 10;

for (let i = 0; i < BOX; i++) {
  const box = document.createElement("div");
  boxes.appendChild(box);
  box.classList.add("box");
  box.innerHTML = `<h2>Content</h2>`;
}

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  // console.log(window.innerHeight)
  const triggerBottom = (window.innerHeight / 5) * 4;

  const boxEls = document.querySelectorAll(".box");

  boxEls.forEach((boxEl) => {
    const boxTop = boxEl.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      boxEl.classList.add("show");
    } else {
      boxEl.classList.remove("show");
      boxEl.classList.add("box");
    }
  });
}
