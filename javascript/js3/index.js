// 'use strict'

// let hasDriversLisense = false;
// const passTest = true;

// if (passTest) hasDriversLisense = true;
// if (hasDriversLisense) console.log('I can Drive')

// const now = 2037;
// const ageJonas = now -1991;
// const ageSarah = now - 2018;

// let x,y;
// x=y=25 - 10 - 5;
// console.log(x,y);

// const avgAge = (ageJonas + ageSarah) / 2
// console.log(ageJonas,ageSarah,avgAge)

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

// const bmiMark = massMark / heightMark**2;
// const bmiJohn = massJohn / heightJohn**2;
// const markHigherBMI = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, markHigherBMI);

// const firstName  = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
// const jonas = "I'm" + " " + firstName + ', a' + " "
//  +(year - birthYear) + " " + 'years old teacher!'
// console.log(jonas)

// const age = 19;
// const isOldEnough = age >= 18;

// if(isOldEnough) {
//    console.log('Sarah can start driving license')
// } 

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

// const bmiMark = massJohn / heightJohn**2;
// const bmiJohn = massJohn / heightJohn**2;

// console.log(bmiJohn, bmiMark)
//  const markHigherBMI = bmiMark > bmiJohn;

// if (bmiMark > bmiJohn) {
//     console.log(`Mark's BMI ${bmiMark} 
// is higher then John's ${bmiJohn}`)
// } else {
//     console.log(`John's BMI ${bmiJohn} 
// is higher then Mark's ${bmiMark})`)
// }

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = NaN;
// if (money) {
//     console.log("Dont spend it all;");
// } else {
//     console.log("You should get a job!");
// }

// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

//  height = 30;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

// const age = 18;
// if (age === 18) console.log('You just became an adult')

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear), + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);

// console.log('23' / '2');

// let n = '1' + 1;
// n = n-1;
// console.log(n)

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// }else {
//     century = 21;
// }
// console.log(century);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// let x,y;
// x = y = 25 - 10 - 5;
// console.log(x,y);

// const averageAge = ageJonas + ageSarah / 2;
// console.log(ageJonas, ageSarah, averageAge)

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// let x = 10+5;
// x += 10;
// x += 4;
// console.log(x);

// const day = 'friday';

// switch (day) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday': 
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend');
//         break;
//     default:
//         console.log('Not a valid day!');
// }

// if (day==='monday') {
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday'|| day === 'sunday') {
//     console.log('Enjoy the weekend');
// } else {
//     console.log('Not a valid day!');
// }

//  const age =23;
//  age >= 18 ? console.log('I like to drink wine'): 
//  console.log('I like to drink water')

// const age = 19;

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18? 'wine' : 'water'}`)

// const bill = 40;
// const tip = bill <= 300 && bill >= 50? bill * 0.15 :
// bill * 0.2;

// console.log(`The bill was ${bill}, the tip was ${tip},
//  and the total value ${bill + tip}`);

// function logger() {
//     console.log("My name is Anan");
// }
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 10);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 10));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUnitRetirement = (birthYear , firstName)=> {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//      return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUnitRetirement(1991, 'Anan'));
// console.log(yearsUnitRetirement(1980, 'Bob'));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     // console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUnitRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return retirement;
//     } else {
//         return -1;
//     }
// }

// console.log(yearsUnitRetirement(1991, 'Jonas'));
// console.log(yearsUnitRetirement(1950, 'Mike'));

const calcAverage = (a , b , c) => (a + b + c) / 3;
console.log(calcAverage(3 , 4, 5));

const scoreDolphins = calcAverage(44 , 23 , 71);
const scoreKoalas = calcAverage(65 , 54 , 49)

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2*avgKoalas) {
        console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
    } else if (avgKoalas >= 2*avgDolphins) {
        console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins,scoreKoalas);