function sayHello(name) {
  console.log("Hello " + name);
}

let f = function () {
  sayHello("Anan, your time is " + Date.now());
};

function fn() {
  setTimeout(f, 1000);
}
console.log("Current time now is " + Date.now());

fn();
