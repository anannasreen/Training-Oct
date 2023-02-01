//Polyfill for bind method

/*let name = {
  firstname: "Anan",
  lastname: "Nasreen",
};

let printName = function (hometown, state, country) {
  console.log(
    this.firstname +
      " " +
      this.lastname +
      " " +
      hometown +
      " ," +
      state +
      " " +
      country
  );
};

let printMyName = printName.bind(name, "Dehradun");
printMyName("Uttarakhand", "India");

Function.prototype.myBind = function (...args) {
  let obj = this,
    params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name, "Dehradun");
printMyName2("Uttarakhand", "India");*/

/*//call,apply and bind

let name = {
  firstname: "Anan",
  lastname: "Nasreen",
  //   printFullName: function () {
  //     console.log(this.firstname + " " + this.lastname);
  //   },
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstname + " " + this.lastname + " from " + hometown + ", " + state
  );
};

printFullName.call(name, "Wayanad", "Kerala");

let name2 = {
  firstname: "Sachin",
  lastname: "Tendulkar",
};

//function borrowing
printFullName.call(name2, "Mumbai", "Maharashtra");

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

//bind method
let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName();*/

//function currying

/*let multiply = function (x, y) {
  console.log(x * y);
};

let multiply1 = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

let multiplyByTwo = multiply.bind(this, 2, 3);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

let multiplyBytwo = multiply1(2);
multiplyBytwo(3);

let multiplyBythree = multiply.bind(this, 3);
multiplyBythree(10);*/

// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("Grandparent clicked");
// },true);//event capturing

// document.querySelector("#parent").addEventListener("click", (e) => {
//   console.log("parent clicked");
//   e.stopPropagation()
// },false);//event bubbling

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("child clicked");
// },true);//event capturing

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent clicked");
//   },
//   false
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("parent clicked");
//     e.stopPropagation();
//   },
//   false
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("child clicked");
//   },
//   false
// );

// document.querySelector("#category").addEventListener("click", (e) => {
// //   console.log("category parent clicked!");
// //   console.log(e);
// //   console.log(e.target);
// //   console.log(e.target.id);
// if(e.target.tagName==='li'){

//     window.location.href = "/" + e.targert.id;
// }
// });

// document.querySelector("#form").addEventListener("keyup", (e) => {
//   console.log(e);
//   if (e.target.dataset.uppercase != undefined) {
//     e.target.value = e.target.value.toUpperCase();
//   }
// });

//prototypal inheritance

// let arr = ["Anan", "Nasreen"];

// let object = {
//   name: "Anan",
//   place: "Wayanad",
//   getIntro: function () {
//     console.log(this.name + " from " + this.place);
//   },
// };

// object.getIntro();

// console.log(object.name);

// console.log(arr.__proto__)
// console.log(Array.prototype)
// console.log(arr.__proto__.__proto__)
// console.log(Object.prototype)
// console.log(arr.__proto__.__proto__.__proto__)

// let object2 = {
//   name: "Adithya",
// };

// console.log(object2.getIntro())

// Function.prototype.myBind = function () {
//   console.log("Anan");
// };

// function fun() {}

// fun.__proto__.myBind();
// fun.myBind();

//Throttling

// const expensive = () => {
//   console.log("Expensive");
// };
// window.addEventListener("resize", expensive);

// const throttle = (funct, limit) => {
//   let flag = true;
//   return function () {
//     funct();
//     flag = false;
//     setTimeout(() => {
//       flag = true;
//     }, limit);
//   };
// };

//recursive function

// let user = {
//   firstname: "Anan",
//   place: {
//     city: "wayanad",
//     state: "kerala",
//   },
// };
// console.log(user.place.city);

// let findObj = {
//   user_name: "Anan",
//   user_place_city: "Wayanad",
//   user_place_state: "kerala",
// };

// let finalObj = {};
// let magic = (obj) => {
//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       magic(obj[key],parent + "_" + key);
//     } else {
//       findObj[parent + "_" + key] = Object(key);
//     }
//   }
// };
// magic(user, "user");

// localStorage.clear()

// let user = {
//   firstname: "Anan",
//   place: {
//     city: "wayanad",
//     state: "kerala",
//   },
// };
// console.log(user.place.city);

// console.log(window);
// localStorage.setItem("hello", "world");
// localStorage.removeItem("hello");
// localStorage.setItem("hello", "world");
// localStorage.setItem("hello", "world");
// localStorage.setItem("hello", "world");
// localStorage.clear();

// localStorage.setItem("user", JSON.stringify(user));
// // localStorage.getItem("user")
// JSON.parse(localStorage.getItem("user"));

// function setLocalStorageData(user) {
//   JSON;
// }
// localStorage.clear();

//Debouncing in Javascript

// let counter = 0;
// const getData = () => {
//   //calls an API and gets Data
//   console.log("Fetching Data...", counter++);
// };

// const debounce = function (fn, delay) {
//   let timer;
//   return function () {
//     let context = this,
//       args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, d);
//   };
// };

// const betterFunction = debounce(getData, 300);

// let sum = function (a) {
//   return function (b) {
//     return a + b;
//   };
// };
// console.log(sum(1)(2)())

// let sum = function (a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// };

// console.log(sum(1)(2)())

// let sum = function (a) {
//   return function (b) {
//     return b ? sum(a + b) : a;
//   };
// };
// console.log(sum(18)(2)(3)(1)());

// let sum = (a) => {
//   return (b) => {
//     return b ? sum(a + b) : a;
//   };
// };
// console.log(sum(18)(2)(3)(1)());

// let sum = (a) => (b) => b ? sum(a + b) : a;

// console.log(sum(10)(2)(30)(12)());

// var n = 2;
// function square(num) {
//   var ans = num * num;
//   return ans;
// }

// var square2 = square(n);
// var square4 = square(4);

// console.log(square2);
// console.log(square4);

// var n = 5;
// function sum(num) {
//   var ans = num + num;
//   return ans;
// }

// var sum2 = sum(n);
// var sum3 = sum(9);

// console.log(sum2);
// console.log(sum3);

// getName();

// console.log(x);
// var x = 7;
// console.log(getName)

// function getName() {
//   console.log("Namaste Javascript");
// }

// console.log(getName)

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

// console.log(window);
// console.log(this);
// console.log(this === window);

// var a=10
// function b(){
//     var x=10
// }

// console.log(window.a)
// console.log(a)

// console.log(a);

// if (a === undefined) {
//   console.log("a is undefined");
// } else {
//   console.log("a is not undefined");
// }

// var a = 7;
// var a;
// console.log(a);
// a = 10;
// console.log(a);
// a = "Hello World";
// console.log(a);

// function a() {
//   function c() {
//     console.log(b);
//   }
//   c()
//   //   console.log(b);
// }
// var b = 10;
// a();

// console.log(b);

// let a = 10;
// a = 20;
// var b = 100;

// console.log(a);
// const c = 0;
// console.log(c);

// console.log(window);
// console.log(this);
// console.log(this.window);

// console.log(this.a);

// {
//   //compound statement or block statement
//   var a = 10;
//   console.log(a);
// }

// if (true) true;
/////////////////////////////////////////////////////////
// var a=100
// {
//   var a = 20;
//   let b = 10;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// const a = 20;
// {
//   const a = 100;
//   {
//     const a = 200;
//     console.log(a);
//   }
// }

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// var z = x();
// console.log(z);

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
// }
// x();

// function c() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// c();

// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a);
//   }
//   return inner;
// }
// outer()();

//data hiding or encapsulation
// function counter(){
// var counter=0
// function incrementCounter(){
//   counter++
// }
// }

// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   };
// }
// var counter1 = counter();
// counter1();
// counter();
// var counter2 = counter();
// counter2();
// counter2();
// counter2();
// counter2();

// setTimeout(function () {
//   console.log("timer");
// }, 5000);
// function x(y) {
//   console.log("x");
// }
// x(function y() {
//   console.log("y");
// });

// function attachEventListener() {
//   let count = 0;
//   document.getElementById("btn").addEventListener("click", function xyz() {
//     console.log("button clicked", ++count);
//   });
// }
// attachEventListener()

// console.log("start");
// setTimeout(function cb() {
//   console.log("callback");
// }, 5000);
// console.log("end");

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//   endDate = new Date().getTime();
// }
// console.log("while expires");

// function cb() {
// console.log("callback");
// }
// cb();

// function x() {
//   console.log("hello");
// }
// function y(x) {
//   x();
// }
// y(x)

// const radius = [3, 1, 2, 4];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// calculateArea(radius);
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };
// calculateCircumference(radius);
// console.log(calculateCircumference(radius));

// const calculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// calculateDiameter(radius);
// console.log(calculateDiameter(radius));

// const radius = [3, 1, 2, 4];
// const area = function (radius) {
//   return Math.PI * radius * radius;
// };

// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };

// const diameter = function (radius) {
//   return 2 * radius;
// };
// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };
// console.log(radius.map(area))
// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// const arr = [5, 1, 3, 2, 6];
// console.log(arr);

// function double(x) {
//   return x * 2;
// }

// function triple(x) {
//   return x * 3;
// }

// const output3 = arr.map(function binary(x) {
//   return x.toString(2);
// });
// const output = arr.map(double);
// const output2 = arr.map(triple);

// console.log(output);
// console.log(output2);
// console.log(output3);

// function isOdd(x) {
//   return x % 2;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// const output = arr.filter((x) => x > 4);
// console.log(output);
////////////////////////////////////////////
const arr = [5, 1, 3, 2, 6];
// const output = arr.filter((x) => x < 3);
// console.log(output);

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(findSum(arr));

const output=arr.reduce(function(acc,curr){
  
})