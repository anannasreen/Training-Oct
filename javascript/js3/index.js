'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
})();

// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);

// const boardpassengers = function (n, wait) {
//   // const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will  start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardpassengers(180, 3);

// setTimeout(function () {
//   console.log('Timer');
// }, 1000);

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// console.log(notPrivate);

// const poll = {
//   question: 'What is yot favourite programming language?',
//   options: ['0:Javascript', '1:Python', '2:Rust', '3:C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `$(this.question)\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );
//     console.log(answer);
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     console.log(this.answers);

//     this.displayResult();
//     this.displayResult('string');
//   },
//   displayResult(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResult.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResult.call({ answers: [1, 3, 2, 4, 5, 5] }, 'string');
// poll.displayResult.call({ answers: [8, 4, 2, 4, 5, 3, 5] }, 'string');

// poll.registerNewAnswer();

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Anan Nasreen');
// lufthansa.book(239, 'Anu');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;
// // book(23, 'Sarah Williams');
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23, 'Anan Nasreen');
// bookEW23('Anan Nasreen');
// bookEW23('Martha Cooper');

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey(' anan');
// greeterHey(' amal');

// greet('Hello')(' anan');

// const greetArr = greeting => name => console.log(`${greeting}${name}`);

// greetArr('Hi')(' anan');

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string:${str}`);
//   console.log(`Transformed string:${fn(str)}`);
//   console.log(`Transformed by:${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);

// transformer('Javascript is the best!', oneWord);

// const high5 = function () {
//   console.log('Hii');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const add = (a, b) => a + b;
// console.log(add);

// const flight = 'LH234';
// const anan = {
//   name: 'Anan Nasreen',
//   passport: 8275785512846783,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Miss.' + passenger.name;

//   if (passenger.passenger === 8275785512846783) {
//     alert('Check In');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// checkIn(flight, anan);
// console.log(flight);
// console.log(anan);

// // flightNum=flight
// const flightNum = flight;
// const passenger = anan;

// const newpassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newpassport(anan);
// checkIn(flight, anan);

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', undefined, 1000);

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value;

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);

//   for (const [i, row] of rows.entries) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}`);
//   }
// });

// const getCode = str => str.slice(0, 3).toUpperCase();

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

// for (const flight of flights.split('+')) {
//   // console.log(flight);
//   // console.log(flight.split(';'));
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.replaceAll('_', ' ')} ${from} ${getCode(
//     to
//   )} (${time.replace(': ', 'h')})`.padStart(36);
//   console.log(output);
// }

// const gameEvents = new Map([
//   [17, 'GOAL'],
//   [36, 'Substitution'],
//   [47, 'GOAL'],
//   [61, 'Substitution'],
//   [64, 'Yellow card'],
//   [69, 'Red card'],
//   [70, 'Substitution'],
//   [72, 'Substitution'],
//   [76, 'GOAL'],
//   [80, 'GOAL'],
//   [92, 'Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// const airline = 'Tap Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// console.log(typeof new String('jonas').slice(1));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'AnAn';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@anan.io';
// const loginEmail = '     Hello@anan.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// const priceGB = '₹3,74,92,98,04,720';
// const priceUS = priceGB.replace('₹', '$');
// console.log(priceUS);

// console.log('a+very+nice+string'.split('+'));
// console.log('Anan Nasreen'.split(''));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(8792039280929208734782934));
// maskCreditCard(6732689469267437623693673)
// -------------------------
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);
// // console.log(question);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get('correct') === answer);

// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Rissoto', 'Pizza']);
// console.log(orderSet);

// console.log(new Set('AnanNasreen'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Rissoto');
// orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get('true'));
// console.log(rest.get('1'));
// console.log(rest.get(1));

// const time = 22;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// const game = {
//   team: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Never',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//     ],
//     ['Burki', 'schulz', 'Hummels', 'Akanji', 'Hakimi'],
//   ],
//   score: '4:0',
//   scored: ['Muller', 'Coman', 'Muller', 'Hummels'],
//   date: 'Nov 9th,2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}:${player}`);

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// console.log(average);
// average /= odds.length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//   // console.log(team, odd);
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// const users = [{ name: 'Anan', email: 'anannasreen@gmial.com' }];

// console.log(users[0]?.name ?? 'User array empty');

// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

//  if (restaurant.openingHours && restaurant.openingHours.mon)
//    console.log(restaurant.openingHours.mon.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${day} we open at ${open} and close at ${close}`);
// }

// const game = {
//   team: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Never',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//     ],
//     ['Burki', 'schulz', 'Hummels', 'Akanji', 'Hakimi'],
//   ],
//   score: '4:0',
//   scored: ['Muller', 'Coman', 'Muller', 'Hummels'],
//   date: 'Nov 9th,2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i + 1}:${player}`);

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals('Davies', 'Muller', 'Kimmich', 'Coman');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// const rest1 = {
//   name: 'capri',
//   numGuests: 20,
//   // numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// const add = function (...numbers) {
//   console.log(numbers);
// };

// add(2, 3);
// add(5, 3, 6, 8);
// add(7, 4, 8, 4, 3, 8);

// const x = [23, 5, 7];
// add(...x);

// ----------------------------------
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0,
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavati 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return this.starterMenu;
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [first, second] = restaurant.categories;
// console.log(first, second);

// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

// let n = 1;
// if ((n - 1) % 3 === 0) {
//   console.log(`${n} belongs to the sequence`);
// } else {
//   console.log(`${n} doesnot belong to this sequence`);
// }

// let lastName = 'William';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// const jessica={
//   firstName:'Jessica',
//   lastName:'Williams',
//   age:27,
// }

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// var firstName = matilda;

// const jonas = {
//   firstName: 'jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   function printAge() {
//     const output = `${firstName}, You are ${age},born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// console.log(this);

// const calcAge = function (birthYear)

// console.log(age);
// printAge();

// --------------pig Game----------------

// 'use strict';

// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// const init = function () {
//   // score0El.textContent = 0;
//   // score1El.textContent = 0;
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   diceEl.classList.add('hidden');
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     // console.log(dice);

//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     if (dice !== 1) {
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//       //   current0El.textContent = currentScore;
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // console.log('Hold Button');
//     scores[activePlayer] += currentScore;
//     // console.log(scores[activePlayer]);
//     // scores[1] = scores[1] + currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     if (scores[activePlayer] >= 20) {
//       playing = false;
//       diceEl.classList.add('hidden');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       switchPlayer();
//     }
//   }
//   // switchPlayer();
// });

//   if (dice !== 1) {
//     currentScore += dice;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//     //   current0El.textContent = currentScore;
//   } else {
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     currentScore = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     player0El.classList.toggle('player--active');
//     player1El.classList.toggle('player--active');
//   }
// });

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// document.addEventListener('keydown', function(e){
//   // console.log('A key was pressed');
//   console.log(e.key);

//   if(e.key ==='Escape'){
//     if(!modal.classList.contains('hidden')){
//       function() {
//         modal.classList.add('hidden');
//         overlay.classList.add('hidden');
//       };
//     }
//   }
// });

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check');

// const x = function () {
//   console.log(23);
// };

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);

//   document.querySelector('.message').textContent = 'Correct Number';
// });

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     displayMessage('No number!');
//   } else if (guess === secretNumber) {
//     displayMessage('Correct Number!');
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       displayMessage(' You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector('.message').textContent = 'Start Guessing....';
//   document.querySelector('.score').textContent = 20;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// -----------------------------------------
// let hasDriversLisense = false;
// const passTest = true;

// if (passTest) hasDriversLisense = true;
// if (hasDriversLisense) console.log('I can Drive')

// const now = 2037;
// const ageJonas = now -1991;
// const ageSarah = now - 2018;

// let x,y;
// x=y=25 - 10 - 5;
// console.log(x,y);

// const avgAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas,ageSarah,avgAge)

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

// const bmiMark = massMark / heightMark**2;
// const bmiJohn = massJohn / heightJohn**2;
// const markHigherBMI = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, markHigherBMI);

// const firstName  = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
// const jonas = "I'm" + " " + firstName + ', a' + " "
//  +(year - birthYear) + " " + 'years old teacher!'
// console.log(jonas)

// const age = 19;
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//    console.log('Sarah can start driving license')
// }

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

// const bmiMark = massJohn / heightJohn**2;
// const bmiJohn = massJohn / heightJohn**2;

// console.log(bmiJohn, bmiMark)
//  const markHigherBMI = bmiMark > bmiJohn;

// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI ${bmiMark}
// is higher then John's ${bmiJohn}`)
// } else {
//     console.log(`John's BMI ${bmiJohn}
// is higher then Mark's ${bmiMark})`)
// }

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = NaN;
// if (money) {
//     console.log("Dont spend it all;");
// } else {
//     console.log("You should get a job!");
// }

// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

//  height = 30;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

// const age = 18;
// if (age === 18) console.log('You just became an adult')

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear), + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);

// console.log('23' / '2');

// let n = '1' + 1;
// n = n-1;
// console.log(n)

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// }else {
//     century = 21;
// }
// console.log(century);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// let x,y;
// x = y = 25 - 10 - 5;
// console.log(x,y);

// const averageAge = ageJonas + ageSarah / 2;
// console.log(ageJonas, ageSarah, averageAge)

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// let x = 10+5;
// x += 10;
// x += 4;
// console.log(x);

// const day = 'friday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day==='monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday'|| day === 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day!');
// }

//  const age =23;
//  age >= 18 ? console.log('I like to drink wine'):
//  console.log('I like to drink water')

// const age = 19;

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18? 'wine' : 'water'}`)

// const bill = 40;
// const tip = bill <= 300 && bill >= 50? bill * 0.15 :
// bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip},
//  and the total value ${bill + tip}`);

// function logger() {
//     console.log("My name is Anan");
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 10);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 10));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUnitRetirement = (birthYear , firstName)=> {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//      return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUnitRetirement(1991, 'Anan'));
// console.log(yearsUnitRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     // console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUnitRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return retirement;
//     } else {
//         return -1;
//     }
// }

// console.log(yearsUnitRetirement(1991, 'Jonas'));
// console.log(yearsUnitRetirement(1950, 'Mike'));

// const calcAverage = (a , b , c) => (a + b + c) / 3;
// console.log(calcAverage(3 , 4, 5));

// const scoreDolphins = calcAverage(44 , 23 , 71);
// const scoreKoalas = calcAverage(65 , 54 , 49)

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2*avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
//     } else if (avgKoalas >= 2*avgDolphins) {
//         console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
// checkWinner(scoreDolphins,scoreKoalas);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 -  1991,
//     job: 'Teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last'  + nameKey]);

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice != 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(MAth.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end....");
// }

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);
// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
// );
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     'Wrong request! Choose between firstName, lastName, age, job, and friends'
//   );
// }
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // }
//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYeah;
//   // }
//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       jonas.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//   },
// };
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// let bills = [250, 115, 60, 40, 30, 70];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tip.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// Dec 16

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// };
// calcAverage([2, 3, 6]);

// const temparatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitude(temparatures);
// console.log(amplitudeNew);

// const temparaturesNew = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degree celsius:')),
//   };

//   console.log(measurement);
//   console.table(measurement);

//   console.log(measurement.value);
//   console.warn(measurement.value);
//   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data1[0]}°C...${data1[1]}°C...${data1[2]}°C...`);

// const printForCast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}°C in ${i + 1} days ... `;
//   }
//   console.log(str);
// };
// printForCast(data1);
