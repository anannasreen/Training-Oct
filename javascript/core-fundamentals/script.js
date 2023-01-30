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

