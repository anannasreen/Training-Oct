const smallCups = document.querySelectorAll('.cup-small');
const listers = document.getElementById('listres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    idx--;
  }

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  }
}

// const counters = document.querySelectorAll('.counter');

// counters.forEach(counter => {
//   counter.innerText = '0';

//   const updateCounter = () => {
//     const target = +counter.getAttribute('data-target');
//     const c = +counter.innerText;

//     const increment = target / 200;

//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCounter();
// });

// const toggle = document.getElementById('toggle');
// const nav = document.getElementById('nav');

// toggle.addEventListener('click', () => nav.classList.toggle('active'));

// const tagsEl = document.getElementById('tags');
// const textarea = document.getElementById('textarea');

// textarea.focus();

// textarea.addEventListener('keyup', e => {
//   createTags(e.target.value);

//   if (e.key === 'Enter') {
//     setTimeout(() => {
//       e.target.value = '';
//     }, 10);
//     randomSelect();
//   }
// });

// function createTags(input) {
//   const tags = input
//     .split(',')
//     .filter(tag => tag.trim() !== '')
//     .map(tag => tag.trim());

//   tagsEl.innerHTML = '';

//   tags.forEach(tag => {
//     const tagEl = document.createElement('span');
//     tagEl.classList.add('tag');
//     tagEl.innerText = tag;
//     tagsEl.appendChild(tagEl);
//   });
// }

// function randomSelect() {
//   const times = 30;

//   const interval = setInterval(() => {
//     const randomTag = pickRandomTag();

//     highlightTag(randomTag);

//     setTimeout(() => {
//       unHighlightTag(randomTag);
//     }, 100);
//   }, 100);

//   setTimeout(() => {
//     clearInterval(interval);

//     setTimeout(() => {
//       const randomTag = pickRandomTag();

//       highlightTag(randomTag);
//     }, 100);
//   }, times * 100);
// }

// function pickRandomTag() {
//   const tags = document.querySelectorAll('.tag');
//   return tags[Math.floor(Math.random() * tags.length)];
// }

// function highlightTag(tag) {
//   tag.classList.add('highlight');
// }

// function unHighlightTag(tag) {
//   tag.classList.remove('highlight');
// }

// const toggles = document.querySelectorAll('.faq-toggle');

// toggles.forEach(toggle => {
//   toggle.addEventListener('click', () => {
//     toggle.parentNode.classList.toggle('active');
//   });
// });

// const insert = document.getElementById('insert');

// window.addEventListener('keydown', event => {
//   insert.innerHTML = `
//   <div class="key">
//   ${event.key === ' ' ? 'Space' : event.key}
//   <small>event.key</small>
// </div>
// <div class="key">
//   ${event.keyCode}
//   <small>event.keyCode</small>
// </div>
// <div class="key">
//   ${event.code}
//   <small>event.code</small>
// </div>
//   `;
// });

// const jokeEl = document.getElementById('joke');
// const jokeBtn = document.getElementById('jokeBtn');

// jokeBtn.addEventListener('click', generateJoke);

// generateJoke();

// async function generateJoke() {
//   const config = {
//     headers: { Accept: 'application/json' },
//   };
//   const res = await fetch('https://icanhazdadjoke.com', config);

//   const data = await res.json();

//   jokeEl.innerHTML = data.joke;
// }

// function generateJoke() {
//   const config = {
//     headers: { Accept: 'application/json' },
//   };
//   fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then(data => {
//       jokeEl.innerHTML = data.joke;
//     });
// }

// const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// sounds.forEach(sound => {
//   const btn = document.createElement('button');
//   btn.classList.add('btn');
//   btn.innerText = sound;
//   btn.addEventListener('click', () => {
//     stopSongs();
//     document.getElementById(sound).play();
//   });
//   document.getElementById('buttons').appendChild(btn);
// });

// function stopSongs() {
//   sounds.forEach(sound => {
//     const song = document.getElementById(sound);
//     song.pause();
//     song.currentTime = 0;
//   });
// }
// const labels = document.querySelectorAll('.form-control label');
// labels.forEach(label => {
//   label.innerHTML = label.innerText
//     .split('')
//     .map(
//       (letter, idx) =>
//         `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
//     )
//     .join('');
// });
