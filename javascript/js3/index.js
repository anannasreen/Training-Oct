'use strict';

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

// const calcAverage = (a , b , c) => (a + b + c) / 3;
// console.log(calcAverage(3 , 4, 5));

// const scoreDolphins = calcAverage(44 , 23 , 71);
// const scoreKoalas = calcAverage(65 , 54 , 49)

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2*avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins}) vs. (${avgKoalas})`);
//     } else if (avgKoalas >= 2*avgDolphins) {
//         console.log(`Koalas win (${avgKoalas}) vs. (${avgDolphins})`);
//     } else {
//         console.log('No team wins...');
//     }
// }
// checkWinner(scoreDolphins,scoreKoalas);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 -  1991,
//     job: 'Teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last'  + nameKey]);

// let rep = 1;
// while (rep <= 10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice != 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(MAth.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end....");
// }

// const calcAge3 = birthYeah => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);
// const yearsUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const yearsUntilRetirement = function (birthYeah, firstName) {
//   const age = calcAge(birthYeah);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);
// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']
// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// };
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
// );
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     'Wrong request! Choose between firstName, lastName, age, job, and friends'
//   );
// }
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
//   // calcAge: function (birthYeah) {
//   //   return 2037 - birthYeah;
//   // }
//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYeah;
//   // }
//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       jonas.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//   },
// };
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
