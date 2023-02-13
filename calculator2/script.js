'use strict ';

const input = document.querySelector('.input-bar');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear-btn');
const equalButton = document.querySelector('.equal-btn');

let readingNumber = 0;
let state = 0;
let accumulator = 0;
let inputValue = 0;
let previousOperator;

input.innerHTML = '';

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (readingNumber === 0) {
      console.log(
        `You clicked a number, and the number is ${number.innerText}`
      );
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
    const opr = operator.innerHTML;
    console.log(`You clicked an operator, and the operator is ${opr}`);

    inputValue = strToInt(input.innerHTML);

    if (state === 0) {
      accumulator = inputValue;
      previousOperator = opr;
      state = 1;
      input.innerHTML = '';
      console.log(inputValue);
    } else {
      switch (previousOperator) {
        case '+':
          accumulator += inputValue;
          break;
        case '-':
          accumulator -= inputValue;
          break;
        case '*':
          accumulator *= inputValue;
          break;
        case '/':
          accumulator /= inputValue;
          break;
        case '=':
          accumulator == inputValue;
          break;
        default:
          console.log('Something went wrong');
      }
      input.innerHTML = accumulator.toString();
      previousOperator = opr;
      readingNumber = 1;
    }
  });
});

clearButton.addEventListener('click', () => {
  input.innerHTML = '';
  readingNumber = 0;
  state = 0;
  inputValue = 0;
  accumulator = 0;
  console.clear();
});

let x;

function strToInt(x) {
  let num = 0;
  for (let i of x) {
    num = num * 10 + charToDigit(i);
  }
  return num;
}

function charToDigit(x) {
  switch (x) {
    case '0':
      return 0;
    case '1':
      return 1;
    case '2':
      return 2;
    case '3':
      return 3;
    case '4':
      return 4;
    case '5':
      return 5;
    case '6':
      return 6;
    case '7':
      return 7;
    case '8':
      return 8;
    case '9':
      return 9;
  }
}
