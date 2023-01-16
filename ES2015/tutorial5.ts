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

// class Person {
//   constructor(name) {
//     console.log(name + " Person constructor");
//   }
//   getID() {
//     return 10;
//   }
// }

// class Employee extends Person {
//   constructor(name) {
//     super(name);
//     console.log(name + " Employee constructor");
//   }
//   getID() {
//     return 50;
//   }
// }

// let e = new Employee("Chandler");
// console.log(e.getID());

// let mySet = Object.create(null);
// mySet.id = true;

// if (mySet.id) {
//   console.log("id exists");
// }

// let myMap = Object.create(null);
// myMap.name = "Chandler";

// let val = myMap.name;
// console.log(val);

// myMap[100] = "Hello";
// console.log(myMap["100"]);

// let ob1 = {};
// let ob2 = {};

// myMap[ob1] = "World";

// console.log(myMap[ob2]);

// console.log(ob1.toString());
// console.log(ob2.toString());

// let mySet = new Set();
// let ob1 = {};
// let ob2 = {};

// mySet.add("Hello");
// mySet.add(1);
// mySet.add(ob1);
// mySet.add(ob2);

// console.log(mySet.size);

// let newSet = new Set([1, 2, 3, 4, 5, 5, 5, 7]);
// console.log(newSet.size);

// let chainSet = new Set().add("hello").add("world");
// console.log(chainSet.size);

// console.log(newSet.has(1));
// console.log(newSet.delete(1));
// console.log(newSet.size);

// let mySet = new Set();
// let key = {};

// mySet.add(key);
// console.log(mySet.size);

// key = null;
// console.log(mySet.size);
// key = [...mySet][0];

// let set = new WeakSet();
// let key = {};
// set.add(key);
// console.log(set.has(key));
// key = null;

// let myMap = new Map();

// myMap.set("fname", "Chandler");
// myMap.set("age", 30);

// console.log(myMap.get("fname"));

// let ob1 = {};
// let ob2 = {};

// myMap.set(ob1, 10);
// myMap.set(ob2, 20);

// console.log(myMap.get(ob1));
// myMap.delete("fname")
// myMap.clear()

// console.log(myMap.size);
// console.log(myMap.has("fname"));

// let myMap = new Map([
//   ["fname", "Chandler"],
//   ["lname", "Bing"],
// ]);

// for (let entry of myMap.entries()) {
//   console.log(`${entry[0]}->${entry[1]}`);
// }

// for (let value of myMap.values()) {
//   console.log(value);
// }

// for (let key of myMap.keys()) {
//   console.log(key);
// }

// var numbers = [2, 4, 5, 6];
// numbers.forEach(arrayFunction);

// function arrayFunction(element, index, array) {
//   console.log("arr[" + index + "]" + element);
// }

// let mySet = new Set([1, 2, 3]);
// mySet.forEach(setFunction);

// function setFunction(value, key, callingSet) {
//   console.log(key + " " + value);
//   console.log(mySet === callingSet);
// }

// let s = Symbol("First Symbol");
// console.log(typeof s);
// console.log(s.toString());

// let s2 = Symbol();
// let s3 = Symbol();

// console.log(s2 === s3);

// let s4 = Symbol.for("RegSymbol");
// let s5 = Symbol.for("RegSymbol");

// console.log(s4 === s5);
// console.log(Symbol.keyFor(s4));

// let fname = Symbol();
// let person = {
//   [fname]: "Chandler",
// };

// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.getOwnPropertySymbols(person));

// let iterable = [1, 2, 3];

// function createIterator(array) {
//   let count = 0;
//   return {
//     next: function () {
//       return count < array.length
//         ? { value: array[count++], done: false }
//         : { value: undefined, done: true };
//     },
//   };
// }

// let myIterator = createIterator(iterable);

// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());
// console.log(myIterator.next());

// function* createGenerator() {
//   yield 1;
//   console.log("After 1st yield");
//   yield 2;
// }

// let myGen = createGenerator();

// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());
// console.log(myGen.next());

// interface Person {
//   fname: string;
//   lname: string;
//   age?: number;
// }

// let employee1: Person = {
//   fname: "Chandler",
//   lname: "Bing",
//   age: 30,
// };

// let employee2: Person = {
//   fname: "Ross",
//   lname: "Geller",
// };

// @Component({
//   selector: "my-app",
//   template: `<h1>Codeevolution Tutorials</h1>`,
// })
// export class AppComponent {}
