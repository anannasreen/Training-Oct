// let i=0;

// function foo() {
//   console.log('Inside foo', i++);
//   coo();
// }

// function coo() {
//   console.log('Inside coo');
//   foo();
// }

// foo();
// coo();

function fact(num) {
  if (num <= 0) return 1;

  return (num = num * fact(num - 1));
}
console.log(fact(6));
