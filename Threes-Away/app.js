// when pressing roll button on 1st turn generate 5 random
//populate the random numbers into the unrolled dice squares
let rollButton = document.querySelector(".roll");
let diceOne = document.querySelector("#dice1");
let diceTwo = document.querySelector("#dice2");
let diceThree = document.querySelector("#dice3");
let diceFour = document.querySelector("#dice4");
let diceFive = document.querySelector("#dice5");
let rolledOne = document.querySelector("#rolledOne");
let rolledTwo = document.querySelector("#rolledTwo");
let rolledThree = document.querySelector("#rolledThree");
let rolledFour = document.querySelector("#rolledFour");
let rolledFive = document.querySelector("#rolledFive");

// diceOne.innerText= 5;
rollButton.addEventListener("click", initRoll)
//max rolls is 5
let count = 0
let num1 = null
let num2 = null
let num3 = null
let num4 = null
let num5 = null

let unrolledDice =[num1, num2, num3, num4, num5]

function initRoll(){
    count++
     //generate 5 random numbers and populate them into the 5 divs.  
        let num1 = generateRandom()
        let num2 = generateRandom()
        let num3 = generateRandom()
        let num4 = generateRandom()
        let num5 = generateRandom()
     diceOne.innerText = num1
     diceTwo.innerText = num2
     diceThree.innerText = num3
     diceFour.innerText = num4
     diceFive.innerText = num5
}

function generateRandom(){
    let value = Math.floor(Math.random() * 6) +1
    return value
}

// generateRandom()
// console.log(generateRandom())
