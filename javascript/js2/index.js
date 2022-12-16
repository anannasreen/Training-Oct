// let selectedColors = ['red' , 'blue']
// selectedColors[2] = 'green';
// console.log(selectedColors);
// console.log(selectedColors[1])

// function greet(name , lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName);
// }
// greet('John','Smith' );
// greet('Mary','Angela'); 

// function square(number) {
//     return number * number;
// }

// console.log(square(2))

// var myStr = "<a href=\"hhtp://www.example.com\" target=\"_blank\">Link</a>";
// var ourStr = "I come first. ";
// ourStr += "I come second.";
// console.log(ourStr)

// var ourName = "freeCodeCamp"
// var ourStr = "Hello, our name is " + ourName + ", how are you?";
// console.log(ourStr)
// var myName = "Anan";
// var myStr = "My name is " + myName + " and I am well!"
// console.log(myStr)

// function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
//     var result = "";
//     result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store" + myAdverb
//     return result;
// }
// console.log(wordBlanks("dog", "big", "ran", "quickly"));

// function minusSeven(num){
//     return num - 7;
// }
// console.log(minusSeven(10));

// function nextInline(arr, item) {
//     arr.push(item);
//     return item;
// }
// var testArr = [1,2,3,4,5];
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInline(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// var changed = 0;
// function change(num) {
//     return (num + 5) / 3;
// }
// changed = change(10);
// var processed = 0;
// function processArg(num) {
//     return (num + 3) / 5;
// }
// processed = processArg(7);
// console.log(processed)

// function nextInline(arr, item) {
//     arr.push(item);
//     return item;
// }
// var testArr = [1, 2, 3, 4, 5];
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInline(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// function testStrict(val) {
//     if (val == 7) {
//         return "Equal";
//     }
//     return "Not Equal";
// }
// console.log(testStrict(10));

// function testSize(num) {
//     if (num < 5) {
//         return "Tiny"
//     } else if (num < 10) {
//         return "Small"
//     } else if (num < 15) {
//         return "Medium"
//     }
//     else if (num < 20) {
//         return "Large"
//     }
//     else {
//         return "Huge"
//     }
// }
// console.log(testSize(7));

// function caseInSwitch(val) {
//     var answer = "";
//     switch (val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break
//         case 3:
//             answer = "gamma";
//             break
//         case 4:
//             answer = "delta";
//             break

//     }
//     return answer;
// }
// console.log(caseInSwitch(2));

// function abTest(a, b) {
//     if (a < 0 || b < 0) {
//         return undefined;
//     }
//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
// }
// console.log(abTest(-2, 2))

// var count = 0;
// function cc(card) {
//     switch (card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
//     }
//     var holdbet = 'Hold'
//     if (count > 0) {
//         holdbet = 'Bet'
//     }
//     return count + " " + holdbet;
// }

// cc(2); cc('K'); cc(10); cc('A');
// console.log(cc(4));

// var testObj = {
//     12 : "Namath",
//     16 : "Montana",
//     19 : "Unitas"
// };
// var playNumber = 16;
// var player = testObj[playNumber];
// console.log(player)

// function phoneticLookup(val) {
//     var result = "";
//     var lookup = {
//         "alpha" : "Adams",
//         "bravo" : "Boston",
//         "charlie" : "Chicago",
//         "delta" : "Denver"

//     };
//     result = lookup[val];
//     return result;
// }
// console.log(phoneticLookup("delta"))

// var myArray = [];
// while(i < 5) {
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);

// var ourArray = [];
// for(var i = 0; i < 15; i += 2) {
//     ourArray.push(i);
// }
// console.log(myArray); 

// function multiplyAll(arr) {
//     var product = 1;
//     for (var i=0; i < arr.length; i++) {
//         for (var j=0; j < arr[i].length; j++) {
//             product *= arr[i][j];
//         }
//     }
//     return product;
// }
// var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
// console.log(product);

// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0987654321",
//         "likes": ["pizza","coding","Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "1234567890",
//         "likes": ["Hogwarts","Magic","Hagrid"]
//     }
// ]
// function lookUpProfile(name,prop){
//     for(var i = 0; i < contacts.length; i++) {
//         if(contacts[i].firstName === name) {
//            return contacts[i][prop] || "No such property";
//         }
//     }
//     return "No such contact";
// }
//         var data = lookUpProfile("Akira", "likes");
//         console.log(data);

// function convertToInteger(str) {
//     return parseInt(str,2)
// }
// convertToInteger("10011")
// console.log(convertToInteger("10011"))

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(2));