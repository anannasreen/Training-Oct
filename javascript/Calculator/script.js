'use strict';

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operation-btn');
const clear = document.getElementById('clear-btn');
const input = document.getElementById('num-input');
const equal_btn = document.getElementById('equal-btn');

let readingNumber = 0;
let state = 0; //0 means starting, 1 means in progress state.
let accumulator = 0;
let inputValue = 0;
let previousOperator;

input.innerHTML = '';

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (readingNumber === 0) {
      //when the first operation takes place
      console.log(`A number was clicked and the number is ${number.innerText}`);
      input.innerHTML += `${number.innerText}`;
      console.log(input.innerHTML, 'helloo');
    } else {
      //after first operation, when we click an operator again, the input value shouldn't append the current value, which is the result of first operation
      input.innerHTML = number.innerHTML;
      console.log(input.innerHTML);
      readingNumber = 0; //so that when the next number is clicked, it enters to the if statement and appends
    }
  });
});

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    const opr = operator.innerHTML;
    console.log(
      `An operator was clicked and the operator is ${operator.innerText}`
    );
    // input.innerHTML = `${operator.innerText}`;
    inputValue = strToInt(input.innerHTML);

    if (state === 0) {
      //this means we are starting fresh
      //we need to just save the input value to the accumulator
      //save the operator to the global previous operator
      accumulator = inputValue;
      previousOperator = opr;
      state = 1;
      input.innerHTML = '';
      console.log(inputValue);
    } else {
      switch (previousOperator) {
        case '+':
          //call the function to add accumulator and the current input value
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
        default:
          //means some operators we don't understand
          console.log('something went wrong');
      }
      input.innerHTML = accumulator.toString(); //since number wont be updated into string automatically in typescript-
      previousOperator = opr;
      readingNumber = 1;
    }
  });
});

clear.addEventListener('click', () => {
  console.log('You clicked reset button');
  input.innerHTML = '';
});

equal_btn.addEventListener('click', () => {
  console.log('You clicked equal button');
  input.innerHTML = accumulator;
});

let x = '99';

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
