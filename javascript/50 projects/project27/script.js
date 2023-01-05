// const loveMe = document.querySelector('.loveMe');
// const times = document.querySelector('#times');

// let clickTime = 0;
// let timesClicked = 0;

// loveMe.addEventListener('click', e => {
//   if (clickTime === 0) {
//     clickTime = new Date().getTime();
//   } else {
//     if (new Date().getTime() - clickTime < 800) {
//       createHeart(e);
//       clickTime = 0;
//     } else {
//       clickTime = new Date().getTime();
//     }
//   }
// });

// const createHeart = e => {
//   const heart = document.createElement('i');
//   heart.classList.add('fas');
//   heart.classList.add('fa-heart');

//   const x = e.clientX;
//   const y = e.clientY;

//   const leftOffset = e.target.offsetLeft;
//   const topOffset = e.target.offsetTop;

//   const xInside = x - leftOffset;
//   const yInside = y - topOffset;

//   //   console.log(xInside, yInside);
//   heart.style.top = `${yInside}px`;
//   heart.style.left = `${xInside}px`;

//   loveMe.appendChild(heart);

//   times.innerHTML = ++timesClicked;

//   setTimeout(() => heart.remove(), 1000);
// };

// const APIURL = 'https://api.github.com/users/';

// const main = document.getElementById('main');
// const form = document.getElementById('form');
// const search = document.getElementById('search');

// async function getUser(username) {
//   try {
//     const { data } = await axios(APIURL + username);

//     createUserCard(data);
//     getRepos(username);
//   } catch (err) {
//     if (err.response.status == 404) {
//       createErrorCard('No profile with this username');
//     }
//   }
// }

// async function getRepos(username) {
//   try {
//     const { data } = await axios(APIURL + username + '/repos?sort=created');

//     addReposToCard(data);
//   } catch (err) {
//     createErrorCard('Problem fetching repos');
//   }
// }

// function createUserCard(user) {
//   const userID = user.name || user.login;
//   const userBio = user.bio ? `<p>${user.bio}</p>` : '';
//   const cardHTML = `
//     <div class="card">
//     <div>
//       <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
//     </div>
//     <div class="user-info">
//       <h2>${userID}</h2>
//       ${userBio}
//       <ul>
//         <li>${user.followers} <strong>Followers</strong></li>
//         <li>${user.following} <strong>Following</strong></li>
//         <li>${user.public_repos} <strong>Repos</strong></li>
//       </ul>
//       <div id="repos"></div>
//     </div>
//   </div>
//     `;
//   main.innerHTML = cardHTML;
// }

// function createErrorCard(msg) {
//   const cardHTML = `
//         <div class="card">
//             <h1>${msg}</h1>
//         </div>
//     `;

//   main.innerHTML = cardHTML;
// }

// function addReposToCard(repos) {
//   const reposEl = document.getElementById('repos');

//   repos.slice(0, 27).forEach(repo => {
//     const repoEl = document.createElement('a');
//     repoEl.classList.add('repo');
//     repoEl.href = repo.html_url;
//     repoEl.target = '_blank';
//     repoEl.innerText = repo.name;

//     reposEl.appendChild(repoEl);
//   });
// }

// form.addEventListener('submit', e => {
//   e.preventDefault();

//   const user = search.value;

//   if (user) {
//     getUser(user);

//     search.value = '';
//   }
// });

// const button = document.getElementById('button');
// const toasts = document.getElementById('toasts');

// const messages = [
//   'Message One',
//   'Message Two',
//   'Message Three',
//   'Message Four',
// ];

// const types = ['info', 'success', 'error'];

// button.addEventListener('click', () => createNotification());

// function createNotification(message = null, type = null) {
//   const notif = document.createElement('div');
//   notif.classList.add('toast');
//   notif.classList.add(type ? type : getRandomType());

//   notif.innerText = message ? message : getRandomMessage();

//   toasts.appendChild(notif);

//   setTimeout(() => {
//     notif.remove();
//   }, 3000);
// }

// function getRandomMessage() {
//   return messages[Math.floor(Math.random() * messages.length)];
// }

// function getRandomType() {
//   return types[Math.floor(Math.random() * types.length)];
// }
