const alphabets = [];

function generateAlphabets() {
  for (i = 65; i <= 90; i++) {
    alphabets.push(String.fromCharCode(i));
  }
  return alphabets;
}

generateAlphabets();

function generateCode(name, num) {
  let arr = [...name.toUpperCase()];
  let code = [];

  for (i = 0; i < arr.length; i++) {
    if (alphabets.includes(arr[i])) {
      code.push(alphabets.indexOf(arr[i]) + num);
    }
  }
  return code;
}

function encryptCode(name, num) {
  num = num % 26;
  let code = generateCode(name, num);
  console.log(code);
  let data = [];

  for (i = 0; i < code.length; i++) {
    if (code[i] >= alphabets.length) {
      code[i] = code[i] - alphabets.length;
    }

    data.push(alphabets[code[i]]);
  }

  return data;
}

let encrypted = encryptCode("zayn", 27).join("");
console.log(encrypted);

function generateDecryptCode(name, num) {
  let arr = [...name.toUpperCase()];
  let code = [];

  for (i = 0; i < arr.length; i++) {
    if (alphabets.includes(arr[i])) {
      code.push(alphabets.indexOf(arr[i]) - num);
    }
  }

  return code;
}

// console.log(generateDecryptCode("ABZO", 1));

function decryptCode(name, num) {
  num = num % 26;
  let code = generateDecryptCode(name, num);
  console.log(code);
  let data = [];

  for (i = 0; i < code.length; i++) {
    if (code[i] < 0) {
      code[i] = code[i] + alphabets.length;
    }

    data.push(alphabets[code[i]]);
  }

  return data;
}

console.log(decryptCode("abzo", 27).join(""));
