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

// const obj = {
//   a: 500,
//   b: 100,
//   myFun: function () {
//     return this.a + this.b;
//   },
// };

// console.log(obj.myFun());

// const myObj = {
//   a: 4,
//   b: 8,
//   c: function () {
//     // console.log('hello');
//     console.log(this, a, b);
//   },
//   // d: () => {
//   //   console.log(this);
//   // },
// };

// myObj.c = myObj.c.bind(myObj);

// console.log(myObj);
// myObj.c();

// console.log(this);

// const yourObj = {
//   k: 12,
//   j: 22,
// };

// var aa = myObj.c;
// // aa();
// aa.call(myObj)

// var k = myObj.c;
// k.call(myObj, 1, 2);

// class MyClass {
//   myFunction() {
//     console.log(this);
//   }
// }

// var obj = new MyClass();
// var a = obj.myFunction;
// a();

// function one() {
//   var a = 100;
//   two(a);
//   console.log('one', a);
// }

// function two(a) {
//   a = a + 1;
//   console.log('two', a);
// }

// one();

// function one() {
//   var a = {
//     value: 100,
//   };
//   two(a);
//   console.log('one', a.value);
// }

// function two(a) {
//   a.value = a.value + 1;
//   console.log('two', a.value);
// }

// one();

// function add(a, b) {
//   const c = a + b;
//   return c;
// }

// function main() {
//   const res = add(3, 4);
//   console.log(res);
// }

// main();

// function main(a){
//   [1,2,3,4,5].forEach(function(i){
//     console.log(i,a)
//   })
// }

// main(10)

// var objs = [
//   {
//     name: 'One',
//     msg: 'Hello I am one',
//   },
//   {
//     name: 'Two',
//     msg: 'Hello I am two',
//   },
//   {
//     name: 'Three',
//     msg: 'Hello I am three',
//   },
// ];

// function main() {
//   objs.forEach(item => {
//     const bt = document.createElement('button');
//     bt.innerHTML = item.name;
//     bt.onclick = getCallBack(item.msg);
//     document.body.appendChild(bt);
//   });
// }

// function getCallBack(arg) {
//   return function () {
//     alert(arg);
//   };
// }

// main();

// var obj = {
//   a: 1,
//   b: 2,
//   c: 'Hello',
// };

// var obj2 = {
//   ...obj,
// };

// console.log(obj);
// console.log(obj2);

// var a = [1, 2, 3, 4];
// var b = [...a];

// console.log(a);
// console.log(b);

// var obj = {
//   a: 1,
//   b: 2,
//   c: 'Hello',
// };

// var obj2 = {
//   ...obj,
// };

// console.log(obj2 === obj);

// var objA = {
//   a: 1,
//   b: 2,
//   c: 'Hello',
// };

// var objB = {
//   a: 1,
//   b: 2,
//   c: 'Hello 2',
// };

// var obj2 = {
//   ...objA,
//   ...objB,
//   z: 32,
// };

// console.log(obj2);

// var a = [1, 2, 3, 4];
// var b = [...a];

// console.log(b === a);

// var arr = [1, 2, 3, 454, 5656, 354];
// var a = Math.max(...arr);
// console.log(a);

// const obj1 = {
//   name: 'Vonnue Innovations',
//   place: 'Wayanad',
//   rank: 1,
// };

// const marks = [1, 2, 34, 5, 6, 6];

// function myFunction() {
//   const { name, place, rank } = obj1;
//   const [a, b, c, d, e, f] = marks;

//   console.log(name, place, rank, a, b, c, d, e, f);
// }

// myFunction();

// const marks = [1, 4, 6];

// function myFunction([a, b, c]) {
//   console.log(a, b, c);
// }
// myFunction(marks);

// var obj1 = {
//   name: 'Vonnue Innovations',
//   place: 'Wayanad',
// };

// var obj2 = {
//   name: 'Bob',
//   place: 'America',
// };

// function abc() {
//   var { name, place } = obj1;

//   var { name: name2, place: place2 } = obj2;

//   console.log(name, place, name2, place2);
// }

// abc();

// const arr = [
//   {
//     name: 'Alice',
//     mark: 35,
//     place: 'Kannur',
//   },
//   {
//     name: 'Bob',
//     mark: 28,
//     place: 'Palakkad',
//   },
//   {
//     name: 'Catherine',
//     mark: 44,
//     place: 'Trissur',
//   },
//   {
//     name: 'Daniel',
//     mark: 23,
//     place: 'Kollam',
//   },
// ];

// console.log(arr);
// arr.forEach(item => {
//   console.log(item);
// });

// var found = arr.find(item => {
//   return item.name === 'Bob';
// });
// console.log(found);

// var found = arr.filter(item => {
//   return item.mark < 30;
// });

// console.log(found);

// var newArr = arr.map(item => {
//   return {
//     ...item,
//     country: 'India',
//   };
// });

// console.log(newArr);

// var value = arr.reduce((total, item) => {
//   return total + item.mark;
// }, 0);

// console.log(value);

// var obj = {
//   name: 'Alice',
//   mark: 35,
//   place: 'Kannur',
//   subject: {
//     teacher: 'Bob',
//   },
// };
// var arr = [
//   {
//     name: 'Alice',
//     mark: 35,
//     place: 'Kannur',
//     subject: {
//       teacher: 'Bob',
//     },
//   },
//   22,
//   33,
// ];

// var [
//   {
//     subject: { teacher },
//   },
// ] = arr;

// console.log(teacher);

// var student1 = {
//   name: 'Alen',
//   yob: 1990,
//   getAge: function () {
//     return new Date().getFullYear() - this.yob;
//   },
//   getName: function () {
//     return this.name;
//   },
// };

// console.log(student1);

// console.log(student1.getName(), student1.getAge());

// function printMinYob(...args) {
//   var arr = args.map(item => item.yob);
//   console.log(Math.min(...arr));
// }

// class Student {
//   name;
//   yob;

//   constructor(name, yob) {
//     this.name = name;
//     this.yob = yob;
//   }

//   getAge() {
//     return new Date().getFullYear() - this.yob;
//   }
//   getName() {
//     return this.name;
//   }
// }

// Student.printMinYob = function (...args) {
//   var arr = args.map(item => item.yob);
//   console.log(Math.min(...arr));
// };

// var student1 = new Student('Alen', 1990);
// var student2 = new Student('Bob', 1999);
// var student3 = new Student('Cook', 1980);

// Student.printMinYob(student1, student2, student3);

// console.log(student1, student1.getName(), student1.getAge());
// console.log(student2, student2.getName(), student2.getAge());
// console.log(student3, student3.getName(), student3.getAge());

// printMinYob(student1, student2, student3);

// class Button {
//   constructor(name) {
//     this.button = document.createElement('button');
//     this.button.innerHTML = name;

//     document.body.appendChild(this.button);
//   }

//   set width(width) {
//     this.button.style.width = width + 'px';
//   }
//   set height(height) {
//     this.button.style.height = height + 'px';
//   }
//   get width() {
//     return this.button.style.width;
//   }
//   get height() {
//     return this.button.style.height;
//   }
// }

// var b1 = {
//   init(name) {
//     this.button = document.createElement('button');
//     this.button.innerHTML = name;
//     document.body.appendChild(this.button);
//   },

//   set width(width) {
//     this.button.style.width = width + 'px';
//   },

//   set height(height) {
//     this.button.style.height = height + 'px';
//   },

//   get width() {
//     return parseInt(this.button.style.width, 10);
//   },

//   get height() {
//     return parseInt(this.button.style.height, 10);
//   },
// };

// b1.init('click');
// b1.width = 100;
// b1.height = 100;

// var b1 = new Button('Click Me!');
// b1.width = 100;
// b1.height = 100;
// console.log(b1.width, b1.height);

/////////////////////////////jan 17//////////////////////////////////

// b1.setWidth(100);
// b1.setHeight(100 );

// class Button {
//   constructor(name) {
//     this.button = document.createElement('button');
//     this.button.innerHTML = name;

//     document.body.appendChild(this.button);
//   }

//   onClick(fn) {
//     this.button.onclick = fn;
//   }
// }

// var b1 = new Button('My button');
// b1.onClick(function () {
//   console.log('Clicked');
// });

// class greenButton extends Button {
// constructor(name) {
//   this.button = document.createElement('button');
//   this.button.innerHTML = name;

//   document.body.appendChild(this.button);
// }

//   onClick(fn) {
//     this.button.onclick = function () {
//       this.button.style.backgroundColor = 'green';
//       fn();
//     }.bind(this);
//   }
// }

// var b1 = new greenButton('Gbutton');
// b1.onClick(function () {
//   console.log('Clicked');
// });

// class Button {
//   constructor(name) {
//     this.button = document.createElement('button');
//     this.button.innerHTML = name;

//     document.body.appendChild(this.button);
//   }

//   onclick(fn) {
//     this.button.onclick = fn;
//   }
// }

// var b1 = new Button('Hello');
// console.log(b1);

// function MyButton(name) {
//   this.button = document.createElement('button');
//   this.button.innerHTML = name;

//   document.body.appendChild(this.button);
// }

// MyButton.prototype.onclick = function (fn) {
//   this.button.onclick = fn;
// };

// function myGreenButton(name) {
//   MyButton.call(this, name);
// }

// console.log(Object.create(MyButton.prototype));

// myGreenButton.prototype = Object.create(MyButton.prototype);
// myGreenButton.prototype.onclick = function (fn) {
//   MyButton.prototype.onclick.call(this, () => {
//     this.button.style.backgroundColor = 'green';
//     fn();
//   });
// };

// myGreenButton.prototype.printme = () => {
//   console.log('hello');
// };

// var b2 = new myGreenButton('Yo!');
// b2.onclick(function () {
//   console.log('clicked');
// });
// // console.log(b2);

// console.dir(myGreenButton);
// console.dir(b2);
// b2.printme();

// var button = document.getElementById('mybutton');

// button.onclick = () => {
//   // console.log('hello');
//   console.log('started event');
//   var arr = [];
//   $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/todos/1',
//     success: data => {
//       console.log('ajax1 started');
//       arr.push(data.title);
//       console.log('ajax1 ended');
//     },
//     async: false,
//   });

//   $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/todos/1',
//     succes: data => {
//       console.log('ajax1 started');
//       arr.push(data.title);
//       console.log('ajax1 ended');
//     },
//     async: false,
//   });

//   var arr = [1, 2, 3, 4, 5];
//   arr.forEach(item => {
//     console.log(item);
//   });

//   document.getElementById('mytext').value = arr.join('\n');
//   console.log('event ended');
// };

// --------------------feb 9-------------------

// var button = document.getElementById('mybutton');
// button.onclick = () => {
//   console.log('started click event')
//   var arr=[1,2,3,4,5]
//   arr.forEach((item)=>{
//     console.log(item)
//   })
//   console.log('ended click event')
// }

// console.log('started');
// const pr = 'https://jsonplaceholder.typicode.com/todos/1';
// // console.log(pr)

// function buttonClick() {
//   console.log('Clicked');
//   pr.then(
//     data => {
//       console.log(data);
//     },
//     err => {
//       console.log(err);
//     }
//   );
// }

// console.log('ended');
