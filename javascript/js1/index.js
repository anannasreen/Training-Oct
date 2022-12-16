// let count = 5*7
// console.log(count) 

// let myAge = 21
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let num = 2
// num = num + 1
// console.log(num)

// let bonusPoint = 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 25
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 70
// console.log(bonusPoint)

// let count = 0
// function increment() {
//     count = count + 1
//     console.log(count)
//     document.getElementById("count-el").innerText = count
// }
// function save() {
//     console.log(count)
// }

// let Name = "Anan"
// let greeting = "Hi, my name is"
// let myGreeting = greeting + " " + Name
// console.log(myGreeting)

// let welcomeEl = document.getElementById("welcome-el")
// let name2 = "Anan Nasreen"
// let greeting2 = "Welcome back "
// welcomeEl.innerText = greeting2 + name2

// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase() {
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again later"
// }

// let firstCard = 6
// let secondCard = 9
// let sum = firstCard + secondCard
// if (sum < 21) {
//     console.log("Do you want to draw a new card?")
// } else if (sum == 21) {
//     console.log("Woohoo! You've got Blackjack!")
// } else if (sum > 21) {
//     console.log("You're out of the game!")
// }
// let thirdCard = getRandomCard()
// let fourthCard = getRandomCard()
// let cards = [thirdCard, fourthCard]
// let result = thirdCard + fourthCard
// let hasBlackJack = false
// let isAlive = true

// let message = ""
// let messageEl = document.getElementById("message-el")
// // console.log(message)

// let resultEl = document.querySelector("#result-el")

// let cardEl = document.getElementById("cards-el")

// function getRandomCard() {
//     let randomNumber = Math.floor( Math.random()*13 ) + 1
//     if (randomNumber > 10) {
//         return 10
//     } else if (randomNumber === 1) {
//          return 11
//     } else {
//         return randomNumber
//     }
// }

// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardEl.textContent = "Cards: " 
//      for (let i = 0; i < cards.length; i++) {
//         cardEl.textContent += cards[i] + " "
//      }

//     resultEl.textContent = "Sum: " + result
//     if (result <= 20) {
//         message = "Do you want to draw a new card?"
//     } else if (result === 21) {
//         message = "Woohoo! You've got Blackjack!"
//         hasBlackJack = true
//     } else {
//         message = "You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message

// }
// function newCard() {
//     console.log("Drawing a new card from the deck!")
//     // let card = 6
//     result += card
//     cards.push(card)
//     renderGame()
// }

// for ( let count = 1; count < 11; count += 1 ) {
//     console.log(count)
// }

// for (let i = 0; i < 6; i++) {
//     console.log(i)
// }

// let messages = [
//     "Hey, how's it going?",
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!"
// ]
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// for ( let i = 1; i < 5; i += 1 ) {
//     console.log(i)
// }

// let card = [7, 3, 9]

// for (let i = 0; i < card.length; i++) {
//     console.log(card[i])
// }

// let sentence = ["Hello" , "my" , "name" , "is" , "Anan"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }
//  let fastestRace = getFastestRaceTime()
//  console.log(fastestRace)

//  let randomNumber = Math.random()
//  console.log(randomNumber)

//  let flooredNumber = Math.floor(4.765489)
//  console.log(flooredNumber)

//  let random1Number = Math.floor(Math.random() * 6 ) + 1
//  console.log(random1Number)

// let hasCompletedCourse = false
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     if (givesCertificate === true) {
//          generateCertificate()
//     }
// }

// function generateCertificate() {
//     console.log("Generating certificate......")
// }

// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution()
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false
// function showSolution() {
//     console.log("Showing the solution....")
// }

// function recommendMovie() {
//     console.log("Hey, check out this new film!")
// }
// let course = {
//     title: "Learn css for free",
//     lessons: 16,
//     creator: "Per Borgen",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }
// console.log( course.length ) 


// let age = 50

// if (age < 6) {
//     console.log("free")
// } else if (age < 27) {
//     console.log("student discount")
// } else if (age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// console.log("The 5 largest countries in the world:")
// for (let i=0; i < largeCountries.length; i++) {
//     console.log("-" + largeCountries[i])
// }

// let large1Countries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// large1Countries.pop()
// large1Countries.push("Pakistan")
// large1Countries.shift()
// large1Countries.unshift("China")
// for (let i=0; i < large1Countries.length; i++) {
//     console.log("-" + large1Countries[i])
// }

// let dayOfMonth = 13
// let weekday = "Friday"

// if(dayOfMonth === 13 && weekday === "Friday") {
//     console.log("spooky")
// }

// let hands = ["rock", "paper", "scissor"]
// function getHand() {
//     let randomIndex = Math.floor(Math.random()*3)
//     return randomIndex
// }
// console.log( getHand() )

// function saveLead() {
//       console.log("Button clicked!")
// }
 
// let inputBtn = document.getElementById("input-btn")
// inputBtn.addEventListener("click", function(){
//     console.log("Button clicked")
// })

// let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })

// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" myLeads[i] + "</li>"
// }
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)

let n = 53
let answer = 0
// let answer2 = 0


for(let i=2; i < n; i++ ) {
    
    if(n % i === 0) {
         answer = answer + 1
       
    }
    //  else {
   
    //    answer2 = answer2 + 1
    // }
    
}
if (answer === 0){
    console.log("It's a prime number")
}else{
    console.log("It's not a prime number")
}



let x = 78
let y = 69
let z = 200
if( x > y && x > z ) {
    console.log(x)
} else if ( y > x && y > z ) {
    console.log(y)
} else {
    console.log(z)
}

// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()'>Buy!</button>"
// function buy(){
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }


// let i = 0
// for(i = 0; i < 10; i += 2) {
//     console.log(i)
// }

// for(let x = 1; x < 10; x++){
// for(let y =1 ; y < 10; y++ ) {
//     let c =x * y
//     console.log (c)
// }
// }

// let i = 50
// let c = i % 10 === 0
// Boolean(c)
//  console.log(Boolean())

