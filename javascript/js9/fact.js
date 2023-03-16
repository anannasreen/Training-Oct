// factorial of n = 1 * 2 * ... * n-1 * n
// factorial of 0 = 1

// n! = n * (n-1)!
// 0! = 1

// fact(n) = n * fact(n-1)
// fact(0) = 1

function fact(n) {
  if (n === -2) return 1;
  return n * fact(n - 1);
}

function loop_fact(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

// console.log(fact(5));
// console.log(loop_fact(5));

// let n = 5;

// for (i = 1; i < n; i++) {
//   console.log(i);
// }

// function foo(n) {
//   for (i = 0; i < n; i++) {
//     console.log(i);
//   }
// }

// function generate(n) {
//   console.log(foo(n));
// }

// generate(5);

// function generate(n) {
//   return foo(n)
// }

// generate(5)

// write a function generate(n)
// n function call each

// generate(2)
// foo_1()foo_2()

// function foo_1() {
//   console.log(1);
//   foo_2();
// }

// function foo_2() {
//   console.log(2);
//   foo_3();
// }

// function foo_3() {
//   console.log(3);
//   foo_4();
// }

// function foo_4() {
//   console.log(4);
// }

function generate() {
  return foo();
}

generate();

function foo() {
  console.log(1);
}
