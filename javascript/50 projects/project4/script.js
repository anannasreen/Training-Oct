const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);
left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);

right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);
// const boxes = document.querySelectorAll('.box');

// window.addEventListener('scroll', checkBoxes);
// checkBoxes();

// function checkBoxes() {
//   const triggerBottom = (window.innerHeight / 5) * 4;
//   boxes.forEach(box => {
//     const boxTop = box.getBoundingClientRect().top;
//     if (boxTop < triggerBottom) {
//       box.classList.add('show');
//     } else {
//       box.classList.remove('show');
//     }
//   });
// }

// const loadText = document.querySelector('.loading-text');
// const bg = document.querySelector('.bg');

// let load = 0;

// let int = setInterval(blurring, 30);

// function blurring() {
//   load++;

//   if (load > 99) {
//     clearInterval(int);
//   }

//   loadText.innerText = `${load}%`;
//   loadText.style.opacity = scale(load, 0, 100, 1, 0);
//   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
// }

// // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };

// const search = document.querySelector('.search');
// const btn = document.querySelector('.btn');
// const input = document.querySelector('.input');

// btn.addEventListener('click', () => {
//   search.classList.toggle('active');
//   input.focus();
// });
