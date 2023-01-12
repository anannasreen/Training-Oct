// function myfunction(arg) {
//   console.log(arg);
// }
// myfunction(10)

// const btn = document.getElementById('button');

// const a=[2,6,3,4,4,8,9]

// a.forEach(myFunction)

// // console.log('one')
// document.getElementById('button').onclick = myFunction;

// function myFunction(arg) {
//   console.log(arg);
// }

// myFunction(10);
// console.log('two')

// const a = [1, 2, 3, 5, 6, 7, 8];

// callback-function
// a.forEach(function (e) {
//   console.log(e);
// });

// arrow-function
// a.forEach(e => console.log(e));

// function myFunction(params) {
//   console.log('Hello World');
// }
// const values = [1, 2, 3, 4, 5];

// values.forEach(myFunction)

// function myFunction(val){
//     console.log('Hello World',val)
// }
// myFunction();

// const fn = function (val) {
//   console.log('Hello Me = ', val);
// };

// values.forEach(fn);
// fn(200);

// myFunction(100);

// function myFunction(val) {
//   console.log('Hello Me', val);
// }

// const fn = function (val) {
//   console.log('Hello World = ', val);
//   return 19;
// };

// const fn2 = val => {
//   console.log('Hello World =', val);
//   return 19;
// };

// fn(1);
// fn2(2);

// const fn = function (a, b) {
//   return a * b;
// };

// const fn2 = (a, b) => {
//   return a + b;
// };

// const fn2 = (a, b) => a + b;

// const fn3 = a => a + 100;

// const add = fn2(4, 7);
// const mult = fn(6, 2);
// const x = fn3(5);

// console.log(add, mult, x);

// const fn4 = () => 'hello';
// console.log(fn4());
// const y=fn4()
// console.log(y)

// const obj = {
//   a: 1,
//   b: 2,
// };

// const fn2 = () => ({
//   a: 1,
//   b: 2,
// });

// const val=fn2()

// console.log(val)

// const fn3=()=>(obj)
// console.log(fn3())

const obj = {
  a: 500,
  b: 100,
  myFun: function () {
    return this.a + this.b;
  },
};

console.log(obj.myFun());

const myObj = {
  a: 4,
  b: 8,
  c: function () {
    // console.log('hello');
    console.log(this);
  },
};

console.log(myObj);
myObj.c();

console.log(this);

