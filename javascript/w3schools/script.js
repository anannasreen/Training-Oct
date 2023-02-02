// function myFunction(p1, p2) {
//   return p1 * p2;
// }
// document.getElementById('content').innerHTML = myFunction(4, 3);

// var x = myFunction(4, 4);
// document.getElementById('content').innerHTML = x;

// function myFunction(a, b) {
//   return a * b;
// }

// function toCelsius(f){
//     return (5/9)*(f-32)
// }
// document.getElementById("content").innerHTML=toCelsius(77)

// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
//   eyeColor: 'blue',
// };

// document.getElementById('content').innerHTML =
//   person.firstName + ' is ' + person.age + ' years old.';

// let hello = '';

// hello = () => {
//   document.getElementById('content').innerHTML += this;
// };

// window.addEventListener('load', hello);
// document.getElementById('btn').addEventListener('click', hello);

// let text = 'Visit w3schools!';
// let n = text.search('w3school');
// document.getElementById('content').innerHTML = n;

// let arr = [1, 2, 3, 4, 5];
// let returnArr = [];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (min < arr[i]) {
//     return min;
//   } else {
//     return (min = arr[i]);
//   }
// }
// console.log(min);

// let num = 2;
// let txt = '';

// while (num != Infinity) {
//   num = num * num;
//   txt += num + '<br>';
// }
// document.getElementById('content').innerHTML = txt;

// console.log(typeof Infinity);

// let num = 32;
// document.getElementById('content').innerHTML =
//   'Decimal 32 =' +
//   '<br><br>' +
//   'Hexatrigesimal (base 36): ' +
//   num.toString(36) +
//   '<br>' +
//   'Duotrigesimal (base 32): ' +
//   num.toString(32) +
//   '<br>' +
//   'Hexadecimal (base 16): ' +
//   num.toString(16) +
//   '<br>' +
//   'Duodecimal (base 12): ' +
//   num.toString(12) +
//   '<br>' +
//   'Decimal (base 10): ' +
//   num.toString(10) +
//   '<br>' +
//   'Octal (base 8): ' +
//   num.toString(8) +
//   '<br>' +
//   'Binary (base 2): ' +
//   num.toString(2);

// let x = 136894675887648756836485;
// let y = 7354865447697613762n;
// let z = BigInt('75465796463674534634217852868127682356257261');

// document.getElementById('content').innerHTML = x + '<br>' + y + '<br>' + z;

// let x = 123;
// document.getElementById('content').innerHTML =
//   x.toString() + '<br>' + (123).toString();

// let x = 9;

// document.getElementById('content').innerHTML =
//   x.toExponential() +
//   '<br>' +
//   x.toExponential(2) +
//   '<br>' +
//   x.toExponential(4) +
//   '<br>' +
//   x.toExponential(6);

// let x = 9.656;

// document.getElementById('content').innerHTML =
//   x.toFixed(0) +
//   '<br>' +
//   x.toFixed(2) +
//   '<br>' +
//   x.toFixed(4) +
//   '<br>' +
//   x.toFixed(6) +
//   '<br>';

// let x = 9.656;

// document.getElementById('content').innerHTML =
//   x.toPrecision() +
//   '<br>' +
//   x.toPrecision(2) +
//   '<br>' +
//   x.toPrecision(4) +
//   '<br>' +
//   x.toPrecision(6) +
//   '<br>';

// document.getElementById('content').innerHTML =
//   parseFloat('10') +
//   '<br>' +
//   parseFloat('10.33') +
//   '<br>' +
//   parseFloat('10 6') +
//   '<br>' +
//   parseFloat('10 years') +
//   '<br>' +
//   parseFloat('years 10');

// let x = Number.EPSILON;
// document.getElementById('content').innerHTML = x;

// let x = Number.MAX_VALUE;
// console.log(x);
// document.getElementById('content').innerHTML = x;

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// let fLen = fruits.length;

// let text = '<ul>';
// for (let i = 0; i < fLen; i++) {
//   text += '<li>' + fruits[i] + '</li>';
// }

// text += '</ul>';

// document.getElementById('content').innerHTML = text;

// let text = '<ul>';
// fruits.forEach(myFunction);
// text += '</ul>';

// document.getElementById('content').innerHTML = text;

// function myFunction(value) {
//   text += '<li>' + value + '</li>' + '<br>';
// }

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// const btn = document.getElementById('btn');
// const content = (document.getElementById('content').innerHTML = fruits);

// btn.addEventListener('click', myFunction);

// function myFunction() {
//   fruits[fruits.length] = 'Lemon';
//   document.getElementById('content').innerHTML = fruits;
// }

// var points = new Array(40);
// document.getElementById('content').innerHTML = points;

// document.getElementById('content').innerHTML = fruits.toString();

// fruits.pop();
// document.getElementById('content').innerHTML = fruits;

// fruits.push('Kiwi');
// document.getElementById('content').innerHTML = fruits;

// fruits.shift();
// document.getElementById('content').innerHTML = fruits;

// fruits.unshift('Lemon');
// document.getElementById('content').innerHTML = fruits;

// fruits[2] = 'Kiwi';
// document.getElementById('content').innerHTML = fruits;

// delete fruits[0];
// document.getElementById('content').innerHTML = fruits;

// const myGirls = ['Cecilie', 'lone'];
// const myBoys = ['Emil', 'Tobias', 'Linus'];

// const myChildren = myGirls.concat(myBoys);
// document.getElementById('content').innerHTML = myChildren;

// const array1 = ["Cecilie", "Lone"];
// const array2 = ["Emil", "Tobias", "Linus"];
// const array3 = ["Robin", "Morgan"];

// const myChildren = array1.concat(array2, array3);

// document.getElementById("content").innerHTML = myChildren;

// fruits.splice(2, 0, 'Lemon', 'Kiwi');
// document.getElementById('content').innerHTML = fruits;

// fruits.splice(0, 1);
// document.getElementById('content').innerHTML = fruits;

// const x = fruits.reverse();
// const y = fruits.sort();

// document.getElementById('content').innerHTML = x;
// document.getElementById('content').innerHTML = y;

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById('content').innerHTML = points;

// points.sort(function (a, b) {
//   return a - b;
// });

// document.getElementById('content2').innerHTML = points;

// document.getElementById('content').innerHTML = points;

// points.sort(function (a, b) {
//   return b - a;
// });

// document.getElementById('content2').innerHTML = points;

// const btn = document.getElementById('btn');
// const btn2 = document.getElementById('btn2');

// btn.addEventListener('click', myFunction);

// btn2.addEventListener('click', myFunction2);

// function myFunction() {
//   points.sort();
//   document.getElementById('content').innerHTML = points;
// }

// function myFunction2() {
//   points.sort(function (a, b) {
//     return a - b;
//   });
//   document.getElementById('content').innerHTML = points;
// }

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById('content').innerHTML = `
// The highest number is ${myArrayMax(points)}
// `;

// function myArrayMax(arr) {
//   return Math.max.apply(null, arr);
// }

// const points = [40, 100, 1, 5, 25, 10];
// document.getElementById("content").innerHTML = myArrayMin(points);

// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {
//     if (arr[len] < min) {
//       min = arr[len];
//     }
//   }
//   return min;
// }

// const cars = [
//   {type:"Volvo", year:2016},
//   {type:"Saab", year:2001},
//   {type:"BMW", year:2010}
// ];

// displayCars();

// function myFunction() {
//   cars.sort(function(a, b){
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) {return -1;}
//     if (x > y) {return 1;}
//     return 0;
//   });
//   displayCars();
// }

// function displayCars() {
//   document.getElementById("content").innerHTML =
//   cars[0].type + " " + cars[0].year + "<br>" +
//   cars[1].type + " " + cars[1].year + "<br>" +
//   cars[2].type + " " + cars[2].year;
// }

// document.getElementById("content").innerHTML = myArrayMax(points);

// function myArrayMax(arr) {
//   let len = arr.length;
//   let max = -Infinity;
//   while (len--) {
//     if (arr[len] > max) {
//       max = arr[len];
//     }
//   }
//   return max;
// }

// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduceRight(myFunction);

// document.getElementById('content').innerHTML = 'The sum is ' + sum;

// function myFunction(total, value, index, array) {
//   return total + value;
// }

// const numbers = [45, 4, 9, 16, 25];

// let txt = '';
// numbers.forEach(myFunction);
// document.getElementById('content').innerHTML = txt;

// function myFunction(value) {
//   txt += value + '<br>';
// }

// const number2 = numbers.map(myFunction);

// document.getElementById('content').innerHTML = number2;

// function myFunction(value) {
//   return value * 2;
// }

// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// document.getElementById('content').innerHTML = over18;

// let sum = numbers.reduce(myFunction);

// document.getElementById('content').innerHTML = 'The sum is ' + sum;

// function myFunction(total, value, index, array) {
//   return total + value;
// }

// let allOver18 = numbers.every(myFunction);

// document.getElementById('content').innerHTML = 'All over 18 is ' + allOver18;
// function myFunction(value) {
//   return value > 18;
// }

// let allOver18 = numbers.some(myFunction);

// document.getElementById('content').innerHTML = 'All over 18 is ' + allOver18;
// function myFunction(value) {
//   return value > 18;
// // }

// const fruits = ['Apple', 'Orange', 'Apple', 'Mango'];
// let position = fruits.indexOf('Apple') + 1;

// document.getElementById('content').innerHTML =
//   'Apple is found in position ' + position;

//   const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple") + 1;

// document.getElementById("content").innerHTML =
// "Apple is found in position " + position;

// let first = numbers.find(myFunction);

// document.getElementById('content').innerHTML =
//   'First number over 18 is ' + first;

// function myFunction(value) {
//   return value > 18;
// }

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// const keys = fruits.keys();

// let text = '';
// for (let x of keys) {
//   text += x + '<br>';
// }
// document.getElementById('content').innerHTML = text;

// const f = fruits.entries();

// for (let x of f) {
//   document.getElementById('content').innerHTML += x + '<br>';
// }

// document.getElementById('content').innerHTML = fruits.includes('Mango');

// const d = new Date(2023, 01, 18, 16, 39, 24);
// document.getElementById('content').innerHTML = d;

// const d = new Date(874000000);
// document.getElementById('content').innerHTML = d;

// const d = new Date();
// document.getElementById('content').innerHTML = d.toString();

// document.getElementById('content').innerHTML = d.toDateString();
// document.getElementById('content').innerHTML = d.toUTCString();
// document.getElementById('content').innerHTML = d.toISOString();

// let msec = Date.parse('March 21,2012');
// const d = new Date(msec);

// document.getElementById('content').innerHTML = d;

// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];

// const d = new Date();
// let month = months[d.getMonth()];

// document.getElementById('content').innerHTML = month;

// const d = new Date('2021-03-25');
// let month = months[d.getMonth()];

// document.getElementById('content').innerHTML = month;

// const d = new Date();
// document.getElementById('content').innerHTML = d.getHours();

// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];

// const d = new Date('2021-03-25');
// let day = days[d.getDay()];

// document.getElementById('content').innerHTML = day;

// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];

// const d = new Date('2021-03-25');
// let day = days[d.getDay()];

// document.getElementById('content').innerHTML = day;

// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// let years = Math.round(Date.now() / year);
// document.getElementById('content').innerHTML = years;

// let text = '';
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);

// if (someday > today) {
//   text = 'Today is before January 14, 2100.';
// } else {
//   text = 'Today is after January 14, 2100.';
// }

// document.getElementById('content').innerHTML = text;

// document.getElementById('content').innerHTML =
//   '<p><b>Math.E:</b> ' +
//   Math.E +
//   '</p>' +
//   '<p><b>Math.PI:</b> ' +
//   Math.PI +
//   '</p>' +
//   '<p><b>Math.SQRT2:</b> ' +
//   Math.SQRT2 +
//   '</p>' +
//   '<p><b>Math.SQRT1_2:</b> ' +
//   Math.SQRT1_2 +
//   '</p>' +
//   '<p><b>Math.LN2:</b> ' +
//   Math.LN2 +
//   '</p>' +
//   '<p><b>Math.LN10:</b> ' +
//   Math.LN10 +
//   '</p>' +
//   '<p><b>Math.LOG2E:</b> ' +
//   Math.LOG2E +
//   '</p>' +
//   '<p><b>Math.Log10E:</b> ' +
//   Math.LOG10E +
//   '</p>';

// document.getElementById('content').innerHTML =
//   '<p><b>Math.round:</b> ' +
//   Math.round(4.6) +
//   '</p>'

// document.getElementById('content').innerHTML = Math.log(1);
// document.getElementById('content').innerHTML = Math.random();

// document.getElementById('content').innerHTML = Math.min(54,56,435,5785);
// document.getElementById('content').innerHTML = Math.max(15,46,763,45);

// document.getElementById('content').innerHTML = Math.floor(Math.random() * 10);
// document.getElementById('content').innerHTML =
//   Math.floor(Math.random() * 10) + 1;

// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//   getRndInteger(1, 10);
// });
// // console.log(getRndInteger)

// function getRndInteger(min, max) {
//   document.getElementById('content').innerHTML =
//     Math.floor(Math.random() * (max - min + 1)) + min;
// }

// if (new Date().getHours() < 18) {
//   document.getElementById('content').innerHTML = 'Good Day';
// } else {
//   document.getElementById('content').innerHTML = 'Good Evening';
// }

// const content = document.getElementById('content');
// const time = new Date().getHours();

// let greeting;
// if (time < 10) {
//   greeting = 'Good morning';
// } else if (time < 20) {
//   greeting = 'Good day';
// } else {
//   greeting = 'Good evening';
// }

// content.innerHTML = greeting;

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }

// document.getElementById('content').innerHTML = 'Today is ' + day;

// switch (new Date().getDay()) {
//   default:
//     text = 'Looking forward to the Weekend';
//     break;
//   case 6:
//     text = 'Today is Saturday';
//     break;
//   case 0:
//     text = 'Today is Sunday';
// }
// document.getElementById('content').innerHTML = text;

// let x = 0;
// switch (x) {
//   case 0:
//     text = 'Off';
//     break;
//   case 1:
//     text = 'On';
//     break;
//   default:
//     text = 'No value found';
// }
// document.getElementById('content').innerHTML = text;

// const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Fiat', 'Audi'];

// let text = '';
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + '<br>';
// }

// document.getElementById('content').innerHTML = text;

// let text = '';

// for (let i = 0; i < 5; i++) {
//   text += 'The number is ' + i + '<br>';
// }

// document.getElementById('content').innerHTML = text;

// const person = {
//   fname: 'John',
//   lname: 'Doe',
//   age: 25,
// };

// let txt = '';
// for (let x in person) {
//   txt += person[x] + ' ';
// }

// document.getElementById('content').innerHTML = txt;

// const numbers = [45, 4, 9, 16, 25];

// let txt = '';
// for (let x in numbers) {
//   txt += numbers[x] + '<br>';
// }

// document.getElementById('content').innerHTML = txt;

// let txt = '';
// numbers.forEach(myFunction);
// document.getElementById('content').innerHTML = txt;

// function myFunction(value) {
//   txt += value + '<br>';
// }

// const cars = ['BMW', 'Volvo', 'Mini'];

// let y =0;
// let text = '';
// for (let x of cars) {
//   text += x + '<br>';
//   y++
// }

// console.log(y)
// document.getElementById('content').innerHTML = text;

// let language = 'Javascript';

// let text = '';
// for (let x of language) {
//   text += x + '<br>';
// }

// document.getElementById('content').innerHTML = text;

// let text = '';
// let i = 0;

// while (i < 10) {
//   text += '<br>The number is ' + i;
//   i++;
// }

// document.getElementById('content').innerHTML = text;

// let text='{"employees":['+'{"firstName":"John","lastName":"Smith"},]}'

// function addUp(num) {
//   return (num * (num + 1)) / 2;
// }
// addUp();
// console.log(addUp(4));

// const arr = [1, 2, 3, 4, 5];
// function minMax() {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// function numSqr(x) {
//   if (x === 1) {
//     return 1;
//   }
//   let y = x ** 2 + numSqr(x - 1);
//   return y
// }
// console.log(numSqr(5))

// const arr = [1, 5, 6, 3];
// let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

// function series(arr) {
//   const total = arr.reduce((a, x) => a + x);
//   return `${total} ohm ${'s'.repeat(total > 1)}`;
// }
// console.log(series([1, 5, 6, 3]));

//---------feb 1-------------

// const arr = [1, 2, 3, 4];

// const initialValue = 0;
// const sum = arr.reduce((acc, curr) => acc + curr, initialValue);

// console.log(sum);

// const array = [15, 16, 17, 18, 19];

// function reducer(acc, curr, idx) {
//   const returns = acc + curr;
//   console.log(
//     `accumulator:${acc},currentValue:${curr},index:${idx},returns:${returns}`
//   );
//   return returns;
// }

// array.reduce(reducer);

// const numbers = [-5, 6, 2, 0];
// const doubledPositiveNumbers = numbers.reduce((acc, curr) => {
//   if (curr > 0) {
//     const doubled = curr * 2;
//     return [acc, doubled];
//   }
//   return acc;
// }, []);
// console.log(doubledPositiveNumbers);

// const y = 10;
// function x() {
//   const y = 15;
//   console.log(y);
// }
// x();

// const person = [
//   {
//     firstname: 'Malcom',
//     lastname: 'Reynolds',
//   },
//   {
//     firstname: 'Kaylee',
//     lastname: 'Frye',
//   },
//   {
//     firstname: 'Jayne',
//     lastname: 'Cobb',
//   },
// ];

// console.log(person.map(getFullName));
// function getFullName(item){
//   return [item.firstname,item.lastname].join(" ")
// }

// const numbers = [15.5, 2.3, 1.1, 4.7];
// console.log(numbers.reduce(getSum, 0));
// function getSum(total, num) {
//   return total + Math.round(num);
// }

// let arr1 = [1, 10];
// let arr2 = [2, 3, 4, 5, 6, 7, 8, 9];

// function tuckIn(arr1,arr2){
//    return [arr1[0],...arr2,arr2[1]]
// }
// console.log(tuckIn(arr1,arr2))

// let arr = [1, 2, 3];
// console.log(arr[0]);

// const words = [
//   'spray',
//   'limit',
//   'elite',
//   'exuberant',
//   'destruction',
//   'present',
// ];
// const result = words.filter(word => word.length > 6);
// console.log(result);

// function isBigEnough(value) {
//   return value >= 10;
// }
// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered);

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return num > 1;
// }
// console.log(array.filter(isPrime));

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

// function filterItems(arr, query) {
//   return arr.filter(el => el.toLowerCase().includes(query.toLowerCase()));
// }

// console.log(filterItems(fruits, 'ap'));
// console.log(filterItems(fruits, 'an'));

// const arrayLike = {
//   length: 3,
//   0: 'a',
//   1: 'b',
//   2: 'c',
// };
// console.log(Array.prototype.filter.call(arrayLike, x => x <= 'b'));

// let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

// const modifiedWords = words.filter((word, index, arr) => {
//   arr[index + 1] += 'extra';
//   return word.length < 6;
// });
// console.log(modifiedWords);

// const appendedWords = words.filter((word, index, arr) => {
//   arr.push('new');
//   return word.length < 6;
// });
// console.log(appendedWords);

// const deleteWords = words.filter((word, index, arr) => {
//   arr.pop();
//   return word.length < 6;
// });
// console.log(deleteWords);

// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];
// console.log(arr1.concat(arr2));

// const obj1 = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
// };
// const obj2 = {
//   0: 1,
//   1: 2,
//   2: 3,
//   length: 3,
//   [Symbol.isConcatSpreadeable]: true,
// };
// console.log([0].concat(obj1, obj2));

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));
// console.log(animals.slice(-2));
// console.log(animals.slice(2, -1));
// console.log(animals.slice());
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months);
// months.splice(4, 1, 'May');
// console.log(months);

// const fruits = new Map([
//   ['apples', 500],
//   ['bananas', 300],
//   ['oranges', 200],
// ]);
// let text = '';
// fruits.forEach(function (value, key) {
//   text += key + ' = ' + value + '\n';
// });
// console.log(text);

// let num = 1000;
// function num_of_digits(num) {
//   if(num < 0){
//       num = num * -1;
//   }
//   return num.toString().length;
// }
// console.log(num_of_digits())

// function circuitPower(volt, curr) {
//   let power = volt * curr;
//   return power;
// }
// console.log(circuitPower(230,10));
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let arr3 = [6, 7];
// function concatenate(...arr) {
//   return arr1.concat(arr2).concat(arr3);
// }
// console.log(concatenate());

// let radius = 5;
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   getArea() {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
//   getPerimeter() {
//     return 2 * Math.PI * this.radius;
//   }
// }

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// const person1 = new Person('John', 'Doe', 50, 'blue');
// const person2 = new Person('Sally', 'Rally', 48, 'green');

// person1.name = function () {
//   return this.firstName + ' ' + this.lastName;
// };
// console.log('Person1 is ' + person1.name());

// class Polygon {
//   constructor() {
//     this.name = 'Polygon';
//   }
// }
// const poly1 = new Polygon();
// console.log(poly1.name);
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   introduce() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
// const anan = new Person('Anan');
// anan.introduce();

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log('draw');
//     },
//   };
// }
// const myCircle=createCircle(1)

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log('draw');
//   };
// }
// const circle = new Circle(1);
// console.log(circle)
// class ValidationError extends Error {
//   printCustomerMessage() {
//     return `Validation failed (details:${this.message})`;
//   }
// }
// try {
//   throw new ValidationError('Not a valid phone number');
// } catch (error) {
//   if (error instanceof ValidationError) {
//     console.log(error.name);
//     console.log(error.printCustomerMessage());
//   } else {
//     console.log('Unknown error', error);
//     throw error;
//   }
// }

// class ParentClass {
//   constructor() {
//     return 1;
//   }
// }
// console.log(new ParentClass());
// class ChildClass extends ParentClass {
//   constructor() {
//     return 1;
//   }
// }
// console.log(new ChildClass());

// class Person {
//   constructor(name = 'Anan') {
//     this.name = name;
//   }
//   introduce() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }
// const person = new Person();
// person.introduce();

// class Square extends Polygon {
//   constructor(length) {
//     super(length, length);
//     this.name = 'Square';
//   }
//   get area() {
//     return this.height * this.width;
//   }
//   set area(value) {
//     this.height = value ** 0.5;
//     this.width = value ** 0.5;
//   }
// }

// class Polygon {
//   constructor() {
//     this.name = 'Polygon';
//   }
// }
// class Rectangle {
//   constructor() {
//     this.name = 'Rectangle';
//   }
// }
// class Square extends Polygon {
//   constructor() {
//     super();
//   }
// }
// Object.setPrototypeOf(Square, Rectangle);
// const newInstance = new Square();
// console.log(newInstance instanceof Polygon);
// console.log(newInstance instanceof Rectangle);
// console.log(newInstance.name);

// class DateFormatter extends Date {
//   getFormattedDate() {
//     const months = [
//       'Jan',
//       'Feb',
//       'Mar',
//       'Apr',
//       'May',
//       'Jun',
//       'Jul',
//       'Aug',
//       'Sep',
//       'Oct',
//       'Nov',
//       'Dec',
//     ];
//     return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
//   }
// }
// console.log(new DateFormatter('February 1,2023 17:49:40').getFormattedDate());

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   getArea() {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
//   getPerimeter() {
//     return 2 * Math.PI * this.radius;
//   }
// }
// console.log(new Circle(7).getArea());
// console.log(new Circle(7).getPerimeter());

// class Rectangle {
//   constructor(length, breadth) {
//     this.length = length;
//     this.breadth = breadth;
//   }
//   getArea() {
//     return length * this.breadth;
//   }
// }
// new Rectangle(5,6)
// console.log(new Rectangle(5,6).getArea())

// class Square {
//   constructor(length) {
//     this.length = length;
//   }
//   getArea(){
//     return length*length
//   }
// }
// console.log(new Square(4).getArea())

// let array = [];
// function arrayOfMultiple(arr, i) {
//   for (i = 1; i < 6; i++) {
//     array.push(arr * i);
//   }
//   return array;
// }
// console.log(arrayOfMultiple(7, 5));

// function arrayMultiples(num, length) {
//   return [...Array(length)].map((_, i) => num * (i + 1));
// }
// console.log(arrayMultiples(7,5))

// function add_sufix(prefix, sufix) {
//   return prefix + sufix;
// }
// console.log(add_sufix('fear', 'less'));
// const array1 = [1, 2, 3, 4];
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentvalue) => accumulator + currentvalue,
//   initialValue
// );
// console.log(sumWithInitial);

// const array = [15, 16, 17, 18, 19];
// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator:${accumulator},currentValue:${currentValue},index:${index},returns:${returns}`
//   );
//   return returns;
// }
// array.reduce(reducer);

// const flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce((accumulator, currentValue) => accumulator.concat(currentValue));
// console.log(flattened);

// const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// const countedNames = names.reduce((allNames, name) => {
//   const currCount = allNames[name] ?? 0;
//   return {
//     ...allNames,
//     [name]: currCount + 1,
//   };
// }, {});
// console.log(countedNames);

// const people = [
//   { name: 'Alice', age: 21 },
//   { name: 'Max', age: 20 },
//   { name: 'Jane', age: 20 },
// ];
// function groupBy(objectArray, property) {
//   return objectArray.reduce((acc, obj) => {
//     const key = obj[property];
//     const curGroup = acc[key] ?? [];
//     return { ...acc, [key]: [...curGroup, obj] };
//   }, {});
// }
// const groupedPeople = groupBy(people, 'age');
// console.log(groupedPeople);

// const friends = [
//   {
//     name: 'Anna',
//     books: ['Bible', 'Harry Potter'],
//     age: 21,
//   },
//   {
//     name: 'Bob',
//     books: ['War and peace', 'Romeo and Juliet'],
//     age: 26,
//   },
//   {
//     name: 'Alice',
//     books: ['The Lord of the Rings', 'The Shining'],
//     age: 18,
//   },
// ];
// const allbooks = friends.reduce(
//   (accumulator, currentValue) => [...accumulator, ...currentValue.books],
//   ['Alphabet']
// );
// console.log(allbooks);

// const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// const myArrayWithNoDuplicates = myArray.reduce((accumulator, currentValue) => {
//   if (!accumulator.includes(currentValue)) {
//     return [...accumulator, currentValue];
//   }
//   return accumulator;
// }, []);
// console.log(myArrayWithNoDuplicates);

// const number = [-5, 6, 2, 0];
// const doubledPositiveNumbers = number.reduce((accumulator, currentValue) => {
//   if (currentValue > 0) {
//     const doubled = currentValue * 2;
//     return [...accumulator, doubled];
//   }
//   return accumulator;
// }, []);
// console.log(doubledPositiveNumbers);

let arr = [true, false, false, true, false];
