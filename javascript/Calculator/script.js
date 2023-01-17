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
input.innerHTML=''

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



var x=add(4,4)
document.getElementById('')