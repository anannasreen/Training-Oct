import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";

function main(): void {
  const firstStr: string = question("Enter first number: \n");
  //   console.log(firstStr);

  const operator: string = question("Enter operator: \n");
  const secondStr: string = question("Enter second number: \n");

  //   console.log(firstStr, operator, secondStr);

  //   const firstNum = isNumber(firstStr);
  const op = isOperator(operator);
  //   console.log(firstNum);
  //   console.log(op);

  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

  //   console.log(validInput);

  if (validInput) {
    console.log("is Valid");

    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  } else {
    console.log("\nInvalid input\n");
    main();
  }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
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

function isOperator(operator: string): boolean {
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

function isNumber(str: string): boolean {
  const maybeNum = parseInt(str); // 33 NaN
  const isNum: boolean = !isNaN(maybeNum);
  return isNum;
}

main();
