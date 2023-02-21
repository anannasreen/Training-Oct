// Integer
var a = 10;
// Boolean
var b = false;
// String
var c = 'Code Malayalam';
// Array
var d = ['Code', 'Malayalam'];
// Object
var e = {
  name: 'Code Malayalam',
  age: '1',
  topic: ['Javascript', 'React', 'SCSS', 'git', 'aws'],
  caption: 'Keep calm and JS',
};

var jsonE = JSON.stringify(e);
console.log(jsonE);

var obj = JSON.parse(jsonE);
console.log(obj);

// var jsonE = `
//   {
//     "name": "Code Malayalam",
//     "age": 1,
//     "topic": ["Javascript", "React", "SCSS", "git", "aws"],
//     "caption": "Keep calm and JS"
//   }
// `;

