// function greetPerson(name) {
//   if (name === "Chandler") {
//     var greet = "Hello Chandler";
//   } else {
//     var greet = "Hi there";
//   }
//   console.log(greet);
// }
// greetPerson("Chandler");
// function greetPerson(name) {
//   let greet;
//   if (name === "Chandler") {
//     greet = "Hello Chandler";
//   } else {
//     greet = "Hi there";
//   }
//   console.log(greet);
// }
// greetPerson("Chandl");
// var a = 1;
// let b = 2;
// if (a === 1) {
//   var a = 10;
//   let b = 20;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);
// for (var i = 1; i <= 5; i++) {
//   //   console.log(i);
//   // }
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }
// let num1;
// const num2 = 3;
// const obj1 = {
//   name: "Joatman",
// };
// console.log(obj1.name);
// obj1.name = "Chandler";
// console.log(obj1.name);
// const PI = 3.14;
// const MAX_SIZE = 100;
// let a = 5;
// let b = 10;
// a = a + b;
// b = a - b;
// a = a - b;
// var getRegvalue = function () {
//   return 10;
// };
// console.log(getRegvalue());
// const getArrowvalue = () => {
//   return 10;
// };
// console.log(getArrowvalue());
// const arrowFunction = (m) => 10 * m;
// console.log(arrowFunction(5));
// const getArrowvalue = (m, bonus) => 10 * m + bonus;
// console.log(getArrowvalue(5, 50));
// console.log(typeof getArrowvalue);
// var employee = {
//   id: 1,
//   greet: function () {
//     setTimeout(() => {
//       console.log(this.id);
//     }, 1000);
//     // console.log(this.id);
//   },
// };
// employee.greet();
let getValue = function (value = 10, bonus = 5) {
    console.log(value + bonus);
};
getValue();
getValue(20);
getValue(20, 10);
getValue(undefined, 30);
