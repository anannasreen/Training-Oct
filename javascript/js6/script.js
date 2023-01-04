// function setUserName() {
//   const myName = prompt('Please enter your name');
//   localStorage.setItem('name', myName);
//   myHeading.textContent = `Mozilla is cool,${myName}`;
// }
// setUserName();

// document.addEventListener('DOMContentLoaded', () => {
//   function createParagraph() {
//     const para = document.createElement('p');
//     para.textContent = 'You clicked the button!';
//     document.body.appendChild(para);
//   }
//   const buttons = document.querySelectorAll('button');
//   for (const button of buttons) {
//     button.addEventListener('click', createParagraph);
//   }
// });

// function myFunction() {
//   const node = document.createElement('li');
//   const textnode = document.createTextNode('Water');
//   node.appendChild(textnode);
//   document.getElementById('myList').appendChild(node);
// }

// const letters = new Set(['a', 'b', 'c']);
// let text = '';
// letters.forEach(function (value) {
//   text += value + '<br>';
// });
// document.getElementById('demo').innerHTML = text;

// const p = document.querySelector('.p');
// setTimeout(function () {
//   p.textContent = 'My name is Anan';
// }, 5000);
// p.style.color = 'red';

// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error:${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data[0].name);
//   } catch (error) {
//     console.error(`Could not get products: ${error}`);
//   }
// }
// fetchProducts();
// const promis = fetchProducts();
// Promise.then(data => console.log(data[0].name));

// const output = document.querySelector('#output');
// const button = document.querySelector('#set-alarm');

// function setAlarm() {
//   setTimeout(() => {
//     output.textContent = 'Wake Up!';
//   }, 1000);
// }
// button.addEventListener('click', setAlarm);

// function alarm(person,delay){
//     return new Promise((resolve,reject)=>{
//         if(delay<0){
//             throw new Error('Alarm delay must not be negative')
//         }
//         setTimeout(()=>{
//             resolve(`Wake up,${person}!`)
//         },delay)
//     })
// }
// let hello = '';
// hello = () => 'Hello World!';
// document.getElementById('demo').innerHTML = hello();

// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve('Success');
//   } else {
//     reject('failed');
//   }
// });
// p.then(message => {
//   console.log('This is in the then ' + message);
// }).catch(message => {
//   console.log('This is in the catch ' + message);
// });

// const userLeft=false
// const userWatchingCatMeme=false

// const body = document.body;
// body.append('Hello');

// const div = document.createElement('div');
// div.innerText = 'Hello';
// div.textContent = 'Hello';
// body.append(div);

// const arr = [1, 2, 3];
// const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
// console.log(max);

// var x = 7;
// function getName() {
//   console.log('Anan');
// }
// getName();
// console.log(x);
