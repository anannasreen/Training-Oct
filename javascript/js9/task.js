function sayHello(name) {
  console.log("Hello " + name);
}

let f = function () {
  sayHello("Anan, your time is " + Date.now());
};

console.log("Current time now is " + Date.now());

setTimeout(f, 1000);
