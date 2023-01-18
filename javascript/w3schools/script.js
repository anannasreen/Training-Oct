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

/////////////////////////////////////////////////////

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

const numbers = [45, 4, 9, 16, 25];

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

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// const keys = fruits.keys();

// let text = '';
// for (let x of keys) {
//   text += x + '<br>';
// }
// document.getElementById('content').innerHTML = text;

const f = fruits.entries();

for (let x of f) {
  document.getElementById('content').innerHTML += x + '<br>';
}

document.getElementById('content').innerHTML = fruits.includes('Mango');
