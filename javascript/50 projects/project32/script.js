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
