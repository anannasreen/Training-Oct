const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData();

filter.addEventListener('input', e => filterData(e.target.value));

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=50');

  const { results } = await res.json();

  result.innerHTML = '';
  results.forEach(user => {
    const li = document.createElement('li');
    listItems.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
       <h4>${user.name.first} ${user.name.last}</h4>
       <p>${user.location.city}, ${user.location.country}</p>
    </div>
    `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach(item => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

// const codes = document.querySelectorAll('.code');

// codes[0].focus();

// codes.forEach((code, idx) => {
//   code.addEventListener('keydown', e => {
//     if (e.key >= 0 && e.key <= 9) {
//       codes[idx].value = '';
//       setTimeout(() => codes[idx + 1].focus(), 10);
//     } else if (e.key === 'Backspace') {
//       setTimeout(() => codes[idx - 1].focus(), 10);
//     }
//   });
// });

// const boxesContainer = document.getElementById('boxes');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));

// function createBoxes() {
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       const box = document.createElement('div');

//       box.classList.add('box');
//       box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
//       boxesContainer.appendChild(box);
//     }
//   }
// }

// createBoxes();

// const password = document.getElementById('password');
// const background = document.getElementById('background');

// password.addEventListener('input', e => {
//   const input = e.target.value;
//   const length = input.length;
//   const blurValue = 20 - length * 2;
//   background.style.filter = `blur(${blurValue}px)`;
// });

// const contents = document.querySelectorAll('.content');
// const listItems = document.querySelectorAll('nav ul li');

// listItems.forEach((item, idx) => {
//   item.addEventListener('click', () => {
//     hideAllContents();
//     hideAllItems();

//     item.classList.add('active');
//     contents[idx].classList.add('show');
//   });
// });

// function hideAllContents() {
//   contents.forEach(content => content.classList.remove('show'));
// }

// function hideAllItems() {
//   listItems.forEach(item => item.classList.remove('active'));
// }

// const poke_container = document.getElementById('poke-container');
// const poke_count = 150;

// const colors = {
//   fire: '#fddfdf',
//   grass: '#defde0',
//   electric: '#fcf7de',
//   water: '#def3fd',
//   ground: '#f4e7da',
//   rock: '#d5d5d4',
//   fairy: '#fceaff',
//   poison: '#98d7a5',
//   bug: '#f8d5a3',
//   dragon: '#97b3e6',
//   psychic: '#eaeda1',
//   flying: '#f5f5f5',
//   fighting: '#e6e0d4',
//   normal: '#f5f5f5',
// };

// const main_types = Object.keys(colors);

// const fetchPokemons = async () => {
//   for (let i = 1; i <= poke_count; i++) {
//     await getPokemon(i);
//   }
// };

// const getPokemon = async id => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   const res = await fetch(url);
//   const data = await res.json();
//   createPokemonCard(data);
// };

// const createPokemonCard = pokemon => {
//   const pokemonEl = document.createElement('div');
//   pokemonEl.classList.add('pokemon');

//   const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
//   const id = pokemon.id.toString().padStart(3, '0');

//   const poke_types = pokemon.types.map(type => type.type.name);
//   const type = main_types.find(type => poke_types.indexOf(type) > -1);
//   const color = colors[type];

//   pokemonEl.style.backgroundColor = color;

//   const pokemonInnerHTML = `
//   <div class="img-container">
//     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">
//   </div>
//   <div class="info">
//     <span class="number">#${id}</span>
//     <h3 class="name">${name}</h3>
//     <small class="type">Type: <span>${type}</span> </small>
//   </div>
//     `;

//   pokemonEl.innerHTML = pokemonInnerHTML;

//   poke_container.appendChild(pokemonEl);
// };

// fetchPokemons();
