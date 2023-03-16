var assert = require("assert");

function generateSumOfMultiples(n) {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      //   console.log(i);
      count = count + i;
    }
  }
  return count;
}

console.log(generateSumOfMultiples(10));
console.log(generateSumOfMultiples(57));

function testResult(i, n) {
  if (generateSumOfMultiples(i) === n) {
    console.log("true");
  } else {
    console.log("false");
  }
}

testResult(10, 23);

function testSumOfNum() {
  let testCases = [
    {
      x: 10,
      expect: 23,
    },
    {
      x: 1000,
      expect: 233168,
    },
    {
      x: 6,
      expect: 8,
    },
  ];

  testCases.forEach((item, i) => {
    let val = generateSumOfMultiples(item.x);
    assert(item.expect === val, "extected" + val + "but got" + val);
  });
}

testSumOfNum();

function genFoo() {
  let max = 1000;
  let fstr = "";

  for (let i = 0; i < max; i++) {
    let str1 = `function foo_${i}(){`;
    let str2 = `console.log(${i});`;
    let str3 = `foo_${i + 1}()}`;
    fstr += str1 + str2 + str3;
  }

  fstr = fstr + `function foo_${max}(){console.log(${max});}foo_0()`;
  console.log(fstr);
}

genFoo();
