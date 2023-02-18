// function printHist(elementMap) {
//   elementMap.forEach((val, key) => {
//     let str = "";
//     for (let i = 0; i < val; i++) {
//       str += "#";
//     }
//     // console.log(key, str, str.length);
//   });
// }
// printHist(countAll(y));
// console.log(maxValue(y))

// let array = ["apple", "orange"];
// let result = array.join("").length;
// // console.log(result);
// // console.log(array[0].length);

// let max = array[0];
// for (i = 0; i < array.length; i++) {
//   console.log(array[i] + " ", array[i].length);
//   if (array[i] > max) {
//     max = array[i];
//   }
// }
// console.log(max, max.length);

// let str = "";
// for (i = 0; i < max.length; i++) {
//   str += "#";
// }
// console.log(str);

// function myNumbers() {
//   let n = 0;
//   return {
//     next: function () {
//       n += 10;
//       return { value: n, done: false };
//     },
//   };
// }

// const n = myNumbers();
// n.next();
// n.next();
// n.next();
// console.log(n.next().value);

//--------------------Map Function--------------------------

const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// console.log(fruits.get("apples"));
// console.log(fruits.has('apples'));

let x = [1, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
let y = [
  "hello",
  "hello",
  "world",
  "my",
  "india",
  "my",
  "we",
  "we",
  "we",
  "we",
];

function countNumber(numbers, x) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === x) {
      count++;
    }
  }
  return count;
}

function countAll(numbers) {
  const uniqueElementCount = new Map();
  for (let i = 0; i < numbers.length; i++) {
    key = numbers[i];
    if (!uniqueElementCount.has(key)) {
      uniqueElementCount.set(key, 1);
    } else {
      uniqueElementCount.set(key, uniqueElementCount.get(key) + 1);
    }
  }
  return uniqueElementCount;
}

function maxValue(array) {
  let max = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function printHist(elementMap) {
  elementMap.forEach((val, key) => {
    let str = " ";
    for (let i = 0; i < maxValue(y).length - key.length; i++) {
      str += " ";
    }
    console.log(key, str, val);
  });
}
printHist(countAll(y));
