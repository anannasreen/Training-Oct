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

// let getValue = function (value = 10, bonus = value*0.1) {
//   console.log(value + bonus);
// };

// getValue();
// getValue(20);
// getValue(20, 10);
// getValue(undefined, 30);

// let percentBonus = () => 0.1;
// let getValue = function (value = 10, bonus = value * percentBonus()) {
//   console.log(value + bonus);
//   console.log(arguments.length);
// };
// getValue();
// getValue(10);
// getValue(20, 30);

// let displayColors = function (message, ...colors) {
//   console.log(message);
//   //   console.log(colors);
//   //   console.log(arguments.length);

//   for (let i in colors) {
//     console.log(colors[i]);
//   }
// };

// let message = "List of Colors";

// // displayColors(message, "Red");
// // displayColors(message, "Red", "Blue");
// // displayColors(message, "Red", "Blue", "green");

// let colorArray = ["Orange", "Yellow", "Indigo"];
// displayColors(message, ...colorArray);

// let firstName = "Chandler";
// let lastName = "Bing";

// let person = {
//   firstname: firstName,
//   lastname: lastName,
// };

// console.log(person.firstname);
// console.log(person.lastname);

// function createPerson(firstname, lastname, age) {
//   let fullname = firstname + " " + lastname;
//   return {
//     firstname,
//     lastname,
//     fullname,
//     isSenior: function () {
//       return age > 60;
//     },
//   };
// }

// let p = createPerson("Ross", "Geller", 32);
// console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.fullname);
// console.log(p.isSenior());

// let ln = "last name";
// let person = {
//   "first name": "Chandler",
//   [ln]: "Bing",
// };

// console.log(person["first name"]);
// console.log(person);

// let employee = ["Chandler", "Bing", "Male"];

// let [fname, lname, gender] = employee;

// console.log(fname);
// console.log(lname);
// console.log(gender);

// let [fname, ...elements] = employee;

// console.log(elements);

// let employee = {
//   fname: "Chandler",
//   lname: "Bing",
//   gender: "Male",
// };

// let { fname:f, lname:l, gender:g } = employee;
// // let [fname, lname, gender = "Male"] = employee;

// // console.log(fname);
// // console.log(lname);
// // console.log(gender);

// console.log(f);
// console.log(l);
// console.log(g);

// let user = "Chandler";
// // let greet = "Welcome " + user + " to ES2015";
// let greet = `Welcome ${user} to ES2015
//              This is the second line.
//                Third line and so       on.
// `;

// console.log(greet);

// let colors = ["Red", "Blue", "Green"];

// for (let index in colors) {
//   console.log(colors[index]);
// }

// for (let color of colors) {
//   console.log(color);
// }

// let letters = "ABC";

// for (let letter of letters) {
//   console.log(letter);
// }

// class Person {
//   greet() {}
// }
// let p = new Person();

// console.log(p.greet === Person.prototype.greet);

// function employee() {}
// employee();

// console.log(typeof Person);

// class Person {
//   constructor(name) {
//     this.name = name;
//     console.log(this.name + " Constructor");
//   }
//   static staticMethod() {
//     console.log("Static Method");
//   }
//   greetPerson() {
//     console.log("Hello" + this.name);
//   }
// }

// let p = new Person(" Chandler");
// Person.staticMethod();
// p.greetPerson();

class Person {
  constructor(name) {
    console.log(name + " Person constructor");
  }
}

class Employee extends Person {
  constructor(name) {
    super(name);
    console.log(name + " Employee constructor");
  }
}

let e = new Employee("Chandler");
