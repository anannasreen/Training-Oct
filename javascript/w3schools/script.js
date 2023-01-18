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

const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

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

