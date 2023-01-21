const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operation-btn');
const clear = document.getElementById('clear-btn');
const equal_btn = document.getElementById('equal-btn');
const input = document.getElementById('num-input');

let readingNumber = 0;
let state = 0;
let accumulator = 0;
let inputValue = 0;
let previousOperator;

input.innerHTML = '';

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (readingNumber === 0) {
      console.log(`You clicked a number and the number is ${number.innerText}`);
      input.innerHTML += `${number.innerText}`;
      console.log(input.innerHTML);
    } else {
      input.innerHTML = number.innerHTML;
      console.log(input.innerHTML);
      readingNumber = 0;
    }
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    console.log(`You clicked ${operator.innerHTML} operator`);
  });
});
