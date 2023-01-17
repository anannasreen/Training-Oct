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

let arr = [1, 2, 3, 4, 5];
let returnArr = [];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (min < arr[i]) {
    return min;
  } else {
    return (min = arr[i]);
  }
}
console.log(min);
