// console.log('Module A log 1')
// import { fname as f, lname as l, obj } from "./moduleB.js";

// obj.name = "Ross";
// console.log(obj.name);
// // console.log('Module A log 2')
// // console.log(fname, lname);
// console.log(`${f} ${l}`);

// import firstName from "./moduleB.js";
// console.log(firstName);

import { greet, GreetMessage } from "./moduleB.js";
greet("Hello World");

let gm = new GreetMessage();
gm.greet();
