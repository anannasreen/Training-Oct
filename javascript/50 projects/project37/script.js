const poke_container = document.getElementById('poke-container');
const poke_count = 150;
const colors = {
  fire: '#fddfdf',
  grass: '#defde0',
  electric: '#fcf7de',
  water: '#def3fd',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: 'f5f5f5',
  fighting: '#e6e0d4',
  normal: '#f5f5f5',
};

const fetchPokemons = async () => {
  for (let i = 1; i <= poke_count; i++) {
    await getPokemon(i);
  }
};
// const getPokemon