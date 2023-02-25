// import { addAll, findMax } from './script1.js';

// const val = addAll([1, 2, 3]);
// const max = findMax([22, 12, 67, 4]);
// console.log(val);
// console.log(max);

// import { createButton } from './script1.js';

// createButton('Feature 2', () => {
//   createButton('Start Disco', changeBg);
//   createButton('Stop Disco', stopChangingBg);
// });

// let isGreen = true;
// let handle = null;
// function changeBg() {
//   if (!handle) {
//     handle = setInterval(() => {
//       document.body.style.background = isGreen ? 'green' : 'blue';
//       isGreen = !isGreen;
//     }, 500);
//   }
// }

// function stopChangingBg() {
//   if (handle) {
//     clearInterval(handle);
//     handle = null;
//     document.body.style.background = 'none';
//   }
// }

const regExp=/cat/

regExp.test('my bat')