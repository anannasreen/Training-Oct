const container = document.getElementById("container");
const btn = document.getElementById("btn");
const box = document.querySelectorAll("box");

let arr = [610, 201, 211, 408, 840];
let max = arr[0];

function greatestNumber() {
  for (i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(greatestNumber());
