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

// -------------------------feb 21---------------------
// console.log('one')
// const a=[2,3,6,7,5,4,3]
// a.forEach(myFunction)
// function myFunction(arg) {
//   console.log(arg);
// }
// // myFunction(10);
// // document.getElementById('button').onclick = myFunction;
// console.log('two')

// function submit() {
//   const items = document.getElementsByClassName('data');
//   const data = {};
//   for (let item of items) {
//     data[item.name] = item.value;
//   }
//   console.log(data);
// }

// const values = [1, 2, 3, 4, 5, 6, 7, 8];
// values.forEach(val => {
//   console.log('Hello World = ', val);
// });

// class MyClass {
//   myFunction() {
//     console.log(this);
//   }
// }
// const myc = new MyClass();
// const k = myc.myFunction;
// k();

// function one() {
//   var a = 100;
//   two(a);
//   console.log(a);
// }
// function two(a) {
//   a = a + 1;
//   console.log(a);
// }
// one();
// var objs = [
//   {
//     name: 'One',
//     msg: 'Hello I am One',
//   },
//   {
//     name: 'Two',
//     msg: 'Hello I am Two',
//   },
//   {
//     name: 'Three',
//     msg: 'Hello I am Three',
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
//   return function myCallback() {
//     alert(arg);
//   };
// }
// main();

// var obj = {
//   a: 1,
//   b: 2,
//   c: 'Hello',
// };
// console.log({...obj});
// var a = [1, 2, 3, 4, 5];
// var b = [6, 7, 8, 9];
// var c = [...a, ...b];
// console.log(c);

// var obj1 = {
//   a: 1,
//   b: 2,
// };
// var obj2 = { ...obj1 };
// obj2.c = 33;
// console.log(obj1, obj2);
// var arr = [1, 2, 33, 48, 54, 5];
// var a = Math.max(...arr);
// console.log(a);
// ----------------------------------------feb 22-----------------------------------------
// const obj1 = {
//   name: 'Code Malayalam',
//   place: 'Kerala',
//   rank: 100,
// };
// function myFunction() {
//   // const name = obj1.name;
//   // const place = obj1.place;
//   // const rank = obj1.rank;
//   const { name, place, rank } = obj1;
//   console.log(name, place, rank);
// }
// myFunction();

// const marks = [1, 4, 6];
// function myFunction() {
//   const [a, b, c, d = false] = marks;
//   console.log(a, b, c, d);
// }
// myFunction();
// function myFunction({ name, place }) {
//   console.log(name, place);
// }
// myFunction(obj1);
// const marks=[1,4,6]
// function myFunction(){
//   var [a,b,c]=getValue()
//   console.log(a,b,c)
// }
// function getValue(){
//   return marks
// }
// myFunction()
// var obj1 = {
//   name: 'Code Malayalam',
//   place: 'Kerala',
// };
// var obj2 = {
//   name: 'Bob',
//   place: 'America',
// };
// function abc() {
//   var { name, place } = obj1;
//   var { name, place } = obj2;
//   console.log(name, place);
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
//   console.log(item.name);
// });

// let sum = 0;
// arr.forEach((item, index) => {
//   sum = sum + item.mark;
//   console.log(index);
// });

// console.log(sum);
// var found = arr.find(item => {
//   return item.name === 'Bob';
// });

// console.log(found);
// var filtered = arr.filter(item => {
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
//     total.push(item.name)
//     return total;
// }, []);

// console.log(value);

// var obj = {
//   name: 'Alice',
//   mark: 35,
//   place: 'Kannur',
// };
// var { name } = obj;
// console.log(name);

// console.log('started');
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });
// console.log('ended');

// console.log('started');
// const pr = fetch('https://jsonplaceholder.typicode.com/todos/1');

// function buttonClick() {
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

// --------------------------------feb 23-------------------------------
// console.log('Requesting 1');
// const pr = fetch('https://jsonplaceholder.typicode.com/todos/1');

// pr.then(data => {
//   console.log(data);
//   console.log('Requesting 2');
//   const pr = fetch('https://jsonplaceholder.typicode.com/todos/2');

//   pr.then(data => {
//     console.log(data);

//     console.log('Requesting 3');
//     const pr = fetch('https://jsonplaceholder.typicode.com/todos/3');

//     pr.then(data => {
//       console.log(data);
//     });
//   });
// });

// console.log('Requesting 1');
// const pr = fetch('https://jsonplaceholder.typicode.com/todos/1');

// const pr2 = pr.then(data => {
//   console.log(data);
//   // return 'hello';
//   console.log('Requesting 2');
//   return fetch('https://jsonplaceholder.typicode.com/todos/1');
// });

// // pr2.then(data => {
// //   console.log(data);
// // });

// const pr3 = pr2.then(data => {
//   console.log(data);
//   console.log('Requesting 3');
//   return fetch('https://jsonplaceholder.typicode.com/todos/1');
// });

// pr3.then(data => {
//   console.log(data);
// });

// console.log('Requesting 1');
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(data => {
//     console.log(data);
//     console.log('Requesting 2');
//     return fetch('https://jsonplaceholder.typicode.com/todos/2');
//   })
//   .then(data => {
//     console.log(data);
//     console.log('Requesting 3');
//     return fetch('https://jsonplaceholder.typicode.com/todos/3');
//   })
//   .then(data => {
//     console.log(data);
//   });

// console.log('===Requesting 1');
// getJson('https://jsonplaceholdefgsdfgr.typicode.com/todos/1')
//   .then(
//     data => {
//       console.log(data);
//       console.log('===Requesting 2');
//       return getJson('https://jsonplaceholder.typicode.com/todos/2');
//     }
//     // err => {
//     //   console.log('ERROR:', err);
//     // }
//   )
//   .then(data => {
//     console.log(data);
//     console.log('===Requesting 3');
//     return getJson('https://jsonplaceholder.typicode.com/todos/3');
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('ERROR:', err);
//   });

// getJson('https://jsonplaceholdefgsdfgr.typicode.com/todos/1')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(data => {
//     console.log(data);
//   });

// Promise.race([
//   getJson('https://jsonplaceholder.typicode.com/todos/1'),
//   getJson('https://jsonplaceholder.typicode.com/todos/2'),
//   getJson('https://jsonplaceholder.typicode.com/todos/3'),
// ])
// .then((data)=>{
//   console.log(data)
// })

// async function getValue() {
//   // return 12;
//   return fetch('https://jsonplaceholder.typicode.com/todos/1');
// }

// const result = getValue();
// result.then(data => {
//   console.log(data);
// });
// console.log(result);

// console.log('Started');
// var aa = getValue();
// aa.then(data => {
//   console.log(data);
// }).catch(() => {
//   console.log('Handled');
// });
// console.log('Ended');
// async function getValue() {
//   // fetch('https://jsonplaceholder.typicode.com/todos/1').then(data => {
//   //   console.log(data);
//   // });
//   try {
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const jsonData = await data.json();
//     console.log(jsonData);
//     return jsonData;
//   } catch (e) {
//     console.log('Handled');
//     return {};
//   }
// }

// const get = require('./api.js');
// const axios = require('axios');
// const BASE_URL = 'https://code-malayalam.github.io.school-test-api';

// async function getTotalStudentsAs(className) {
//   const data = await axios(`${BASE_URL}/class/${className}.json`);
//   const classTeacher = data.data.classTeacher;
//   const data2 = await axios(`${BASE_URL}/staff/${classTeacher}.json`);
//   const classes = data2.data.classes;
//   const promiseArr = classes.map(element => {
//     return axios(`${BASE_URL}/class/${element}.json`);
//   });
//   const data3 = await Promise.all(promiseArr);
//   const result = data3.reduce((total, item) => {
//     return total + item.data.numberOfStudents;
//   }, 0);

//   return result;
// }

// function getTotalStudentsPr(className) {
//   return axios(`${BASE_URL}/class/${className}.json`)
//     .then(data => {
//       const classTeacher = data.data.classTeacher;
//       return axios(`${BASE_URL}/staff/${classTeacher}.json`);
//     })
//     .then(data => {
//       const classes = data.data.classes;
//       const promiseArr = classes.map(element => {
//         return axios(`${BASE_URL}/class/${element}.json`);
//       });
//       return Promise.all(promiseArr);
//     })
//     .then(data => {
//       return data.reduce((total, item) => {
//         return total + item.data.numberOfStudents;
//       }, 0);
//     })
//     .catch(err => {
//       console.log(err);
//       return 0;
//     });
//   // .then(data => {
//   //   console.log(data);
//   //   return data
//   // });
// }

// function getTotalStudents(className, success, failure) {
//   get(
//     `${BASE_URL}/class/${className}.json`,
//     data => {
//       console.log(data);
//       const classTeacher = data.classTeacher;
//       get(
//         `${BASE_URL}/staff/${classTeacher}.json`,
//         data => {
//           console.log(data);
//           let count = 0;
//           let error = false;
//           let sum = 0;
//           const classes = data.classes;
//           for (let index = 0; index < classes.length; index++) {
//             const element = classes[index];
//             get(
//               `${BASE_URL}/class/${element}.json`,
//               data => {
//                 count++;
//                 sum = sum + data.numberOfStudents;
//                 if (count === classes.length && error === false) {
//                   console.log(sum);
//                   success(sum);
//                 }
//               },
//               err => {
//                 if (error === false) {
//                   error = true;
//                   error(err);
//                 }
//               }
//             );
//           }
//         },
//         failure
//       );
//     },
//     failure
//   );
// }

// getTotalStudentsAs('10c')
//   .then(data => {
//     console.log('***', data);
//   })
//   .catch(err => {
//     console.log('ERROR');
//   });

// getTotalStudents(
//   '10c',
//   data => {},
//   err => {}
// );

// getTotalStudentsPr('10c').then(data => {
//   console.log('***', data);
// });

// console.log('started');

// const a = getVal1();
// let a;

// try {
//   a = getVal1();
// } catch (e) {
//   a = 0;
// }
// const b = getVal2();
// const result = processValues(a, b);
// console.log(result);

// console.log('ended');

// function getVal1() {
//   console.log('inside getVal1');
//   var obj = undefined;
//   // return 12;
//   return obj.value;
// }

// function getVal2() {
//   console.log('inside getVal2');
//   return 22;
// }

// function processValues(a, b) {
//   return a + b;
// }

// console.log('started');
// let a, b, result;
// try {
//   console.log('on try');
//   a = getVal1();
//   b = getVal2();
//   result = processValues(a, b);
// } catch (e) {
//   console.log('on catch');
//   result = 0;
// } finally {
//   console.log('in finally');
// }

// console.log(result);
// console.log('ended');

// function getVal1() {
//   return 12;
// }

// function getVal2() {
//   console.log('inside getVal2');
//   return 22;
// }

// function processValues(a, b) {
//   return a + b;
// }

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
// console.log(student1.getName(), student1.getAge());

// const userArray = [
//   {
//     userName: 'user1',
//     userAddress: 'addr1',
//     userMark: 10,
//   },
//   {
//     userName: 'user2',
//     userAddress: 'addr2',
//     userMark: 40,
//   },
//   {
//     userName: 'user3',
//     userAddress: 'addr3',
//     userMark: 30,
//   },
//   {
//     userName: 'user4',
//     userAddress: 'addr4',
//     userMark: 20,
//   },
// ];

// function myIterator(item, arg) {
//   console.log(`My mark = ${item.userMark}`);
//   console.log(arg);
// }

// userArray.forEach(myIterator);
// console.log(userArray.length);

// const value = userArray.find(function (item, arg) {
//   return item.userMark === 20;
// });

// const value1 = userArray.filter(function (item, arg) {
//   return item.userMark < 30;
// });

// const value2 = userArray.map(function (item, arg) {
//   return `<li>${item.userName}=${item.userMark}</li>`;
// });

// const value3 = userArray.reduce(function (total, item) {
//   return total + item.userMark;
// }, 0);

// console.log(value);
// console.log(value1);
// console.log(value2);
// console.log(value3);

// -------------------------feb 24---------------------------
// console.log('self invoking function');
// var number = 12;
// function fn1() {
//   console.log(number);
// }
// function fn2() {
//   console.log(number);
// }
// console.log(number)
// fn1();
// fn2();

// var button = document.getElementById('hello');
// button.onclick = () => {
//   button.style.background = 'green';
//   console.log(button.innerHTML);
// };

// var button2 = document.getElementById('bye');
// button2.onclick = () => {
//   button2.style.background = 'red';
//   console.log(button2.innerHTML);
// };

// function main() {
//   var button = document.getElementById('hello');
//   button.style.background = 'green';
//   button.onclick = () => {
//     console.log(button.innerHTML);
//   };
// }
// main();

// (function () {
//   var button2 = document.getElementById('bye');
//   button2.style.background = 'red';
//   button2.onclick = () => {
//     console.log(button2.innerHTML);
//   };
// })();

// (function (a, b) {
//   console.log(a + b);
// })(12, 3);

// console.log('Script 1');
// function addArray(arr) {
//   return arr.reduce((total, item) => total + item, 0);
// }

// const value = addArray([3, 5, 5]);
// console.log(value);

// function addArray(arr1, arr2) {
//   return arr1.concat(arr2);
// }

// console.log(addArray([1,2,3],[1,2,3]))

// console.log('modules')

// const value=addArray([1,2,3])
// console.log(value)




// -------------------------------------------------------------------------------
let callbackList = [];

function register(cbfn, cbarg, cbtime) {
  let x = {
    fn: cbfn,
    arg: cbarg,
    time: cbtime,
  };
  callbackList.push(x);
}
function sayHello(name) {
  console.log('Hello ', name);
}
function sayBye(name) {
  console.log('Bye ', name);
}
function sayTime(tm) {
  console.log('Registered at ', tm, ' now it is ', Date.now());
}
register(sayHello, 'Anusha', 2000);
// register(sayHello, 'Hisham');
// register(sayHello, 'Anan');
// register(sayHello, 'Aneesh');
// register(sayHello, 'Aiswarya');
// register(sayHello, 'Nivya');
// register(sayHello, 'Aparna');
// register(sayBye, 'Jack');

function controller() {
  console.log('Inside Controller...');
  for (let i = 0; i < callbackList.length; i++) {
    console.log(callbackList[i].fn(callbackList[i].arg));
  }
}

// setInterval(controller, 3000);

// controller();
