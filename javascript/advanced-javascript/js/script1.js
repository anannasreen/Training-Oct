// export const name = 'My Array Library';

// export const options = {
//   version: '1.1',
//   author: 'Code Malayalam',
// };

// export function addAll(arr = []) {
//   log('addAll');
//   return arr.reduce((total, item) => total + item, 0);
// }

// export function findMax(arr = []) {
//   log('findMax');
//   return Math.max(...arr);
// }

// function log(val) {
//   console.log('INSIDE', val);
// }

export function createButton(name, fn) {
  const btn = document.createElement('button');
  btn.innerText = name;
  btn.onclick = fn;
  btn.style.margin = '5px';
  document.body.appendChild(btn);
}
