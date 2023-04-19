"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number: \n");
    //   console.log(firstStr);
    var operator = (0, readline_sync_1.question)("Enter operator: \n");
    var secondStr = (0, readline_sync_1.question)("Enter second number: \n");
    //   console.log(firstStr, operator, secondStr);
    //   const firstNum = isNumber(firstStr);
    var op = isOperator(operator);
    //   console.log(firstNum);
    //   console.log(op);
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    //   console.log(validInput);
    if (validInput) {
        console.log("is Valid");
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum);
        console.log(result);
    }
    else {
        console.log("\nInvalid input\n");
        main();
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            return firstNum / secondNum;
    }
}
function isOperator(operator) {
    //   return (
    //     operator === "+" || operator === "-" || operator === "*" || operator === "/"
    //   );
    switch (operator) {
        case "+":
        case "-":
        case "*":
        case "/":
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str); // 33 NaN
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
