const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));

  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// const imgs = document.getElementById('imgs');
// const leftBtn = document.getElementById('left');
// const rightBtn = document.getElementById('right');

// const img = document.querySelectorAll('#imgs img');

// let idx = 0;

// let interval = setInterval(run, 2000);

// function run() {
//   idx++;
//   changeImage();
// }

// function changeImage() {
//   if (idx > img.length - 1) {
//     idx = 0;
//   } else if (idx < 0) {
//     idx = img.length - 1;
//   }

//   imgs.style.transform = `translateX(${-idx * 500}px)`;
// }

// function resetInterval() {
//   clearInterval(interval);
//   interval = setInterval(run, 2000);
// }

// rightBtn.addEventListener('click', () => {
//   idx++;

//   changeImage();
//   resetInterval();
// });

// leftBtn.addEventListener('click', () => {
//   idx--;

//   changeImage();
//   resetInterval();
// });

// const nums = document.querySelectorAll('.nums span');
// const counter = document.querySelector('.counter');
// const finalMessage = document.querySelector('.final');
// const replay = document.querySelector('#replay');

// runAnimation();

// function resetDom() {
//   counter.classList.remove('hide');
//   finalMessage.classList.remove('show');

//   nums.forEach(num => {
//     num.classList.value = '';
//   });

//   nums[0].classList.add('in');
// }

// function runAnimation() {
//   nums.forEach((num, idx) => {
//     const nextToLast = nums.length - 1;

//     num.addEventListener('animationend', e => {
//       if (e.animationName === 'goIn' && idx !== nextToLast) {
//         num.classList.remove('in');
//         num.classList.add('out');
//       } else if (e.animationName === 'goOut' && num.nextElementSibling) {
//         num.nextElementSibling.classList.add('in');
//       } else {
//         counter.classList.add('hide');
//         finalMessage.classList.add('show');
//       }
//     });
//   });
// }

// replay.addEventListener('click', () => {
//   resetDom();
//   runAnimation();
// });

////////////////////////////////////////////////
// const addBtn = document.getElementById('add');

// const notes = JSON.parse(localStorage.getItem('notes'));

// if (notes) {
//   notes.forEach(note => addNewNote(note));
// }

// addBtn.addEventListener('click', () => addNewNote());

// function addNewNote(text = '') {
//   const note = document.createElement('div');
//   note.classList.add('note');

//   note.innerHTML = `
//     <div class="tools">
//         <button class="edit"><i class="fas fa-edit"></i></button>
//         <button class="delete"><i class="fas fa-trash-alt"></i></button>
//     </div>
//     <div class="main ${text ? '' : 'hidden'}"></div>
//     <textarea class="${text ? 'hidden' : ''}"></textarea>
//     `;

//   const editBtn = note.querySelector('.edit');
//   const deleteBtn = note.querySelector('.delete');
//   const main = note.querySelector('.main');
//   const textArea = note.querySelector('textarea');

//   textArea.value = text;
//   main.innerHTML = marked(text);

//   deleteBtn.addEventListener('click', () => {
//     note.remove();

//     updateLS();
//   });

//   editBtn.addEventListener('click', () => {
//     main.classList.toggle('hidden');
//     textArea.classList.toggle('hidden');
//   });

//   textArea.addEventListener('input', e => {
//     const { value } = e.target;

//     main.innerHTML = marked(value);

//     updateLS();
//   });

//   document.body.appendChild(note);
// }

// function updateLS() {
//   const notesText = document.querySelectorAll('textarea');

//   const notes = [];

//   notesText.forEach(note => notes.push(note.value));

//   localStorage.setItem('notes', JSON.stringify(notes));
// }

// const toggles = document.querySelectorAll('.toggle');
// const good = document.querySelector('#good');
// const cheap = document.querySelector('#cheap');
// const fast = document.querySelector('#fast');

// toggles.forEach(toggle =>
//   toggle.addEventListener('change', e => doTheTrick(e.target))
// );

// function doTheTrick(theClickedOne) {
//   if (good.checked && cheap.checked && fast.checked) {
//     if (good === theClickedOne) {
//       fast.checked = false;
//     }
//     if (cheap === theClickedOne) {
//       good.checked = false;
//     }
//     if (fast === theClickedOne) {
//       cheap.checked = false;
//     }
//   }
// }

// let arr = 'MALAYALAM';
// const arrSplit = arr.split('');
// const arrReverse = arrSplit.reverse();
// if (arrSplit == arrReverse) {
//   console.log(`${arr} is a Palindrome`);
// } else {
//   console.log(`${arr} is not a palindrome`);
// }
