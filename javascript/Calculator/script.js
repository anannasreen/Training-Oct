'use strict';

// let x = 2;
// let y = 4;

// function add(x, y) {
//   return x + y;
// }
// console.log(`The sum of ${x} and ${y} is ${add(x, y)}`);

// function subtract(x, y) {
//   return x - y;
// }
// console.log(`The difference of ${x} and ${y} is ${subtract(x, y)}`);

// function multiply(x, y) {
//   return x * y;
// }
// console.log(`The product of ${x} and ${y} is ${multiply(x, y)}`);

// function divide(x, y) {
//   return x / y;
// }
// console.log(`The quotient of ${x} by ${y} is ${divide(x, y)}`);

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operation-btn');
const clear = document.getElementById('clear-btn');
const input = document.getElementById('num-input');
input.innerHTML = '';

numbers.forEach(number => {
  number.addEventListener('click', () => {
    console.log(`A number was clicked and the number is ${number.innerText}`);

    input.innerHTML += `${number.innerText}`;

    // str = str.split('');
    // input.innerHTML = `${str.splice(0, 1)}`;
    // console.log(str);
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    console.log(
      `An operator was clicked and the operator is ${operator.innerText}`
    );
    input.innerHTML = `${operator.innerText}`;
  });
});

clear.addEventListener('click', () => {
  input.innerHTML = '0';
});

let x = '99s3425';

function stringToInt(x) {
  let num = 0;

  for (let i of x) {
    num = num * 10 + charToDigit(i);
  }
  return num;
}

function charToDigit(x) {
  if (x === '0') return 0;
  if (x === '1') return 1;
  if (x === '2') return 2;
  if (x === '3') return 3;
  if (x === '4') return 4;
  if (x === '5') return 5;
  if (x === '6') return 6;
  if (x === '7') return 7;
  if (x === '8') return 8;
  if (x === '9') return 9;
  else console.log('It is a string');
}

let y = stringToInt(x);
console.log('The number is ', y, 'type is ', typeof y);
