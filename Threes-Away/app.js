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
rollButton.addEventListener("click", turnBegin)
//max rolls is 5
let count = 0

let rolledDice = []

//inside of listener put a function that counts clicks
// inside of that put if statements to run 5 seperate functions, 1 for each roll.
//number of dice will be determined by the result of subsequent roll
//define variable outside of scope to hold the number of dice per roll

function turnBegin(){
  if (count === 0){
    initRoll()
    count++
  } else if(count === 1){
    secondRoll()
    count++
  } else if (count === 2){
    thirdRoll()
    count++
  } else if(count === 3){
    fourthRoll()
    count++
  } else if(count === 4){
    finalRoll()
    count++
  } else {
   console.log("stop clicking")
  }

}


let rollTwoDiceCount = 0
function initRoll(){
        let num1 = genRan()
        let num2 = genRan()
        let num3 = genRan()
        let num4 = genRan()
        let num5 = genRan()
     diceOne.innerText = num1
     diceTwo.innerText = num2
     diceThree.innerText = num3
     diceFour.innerText = num4
     diceFive.innerText = num5
     let arrayOne = [num1 , num2, num3, num4, num5]
     let checkThrees = arrayOne.filter(num => num === 3)
     threesRolled = checkThrees.length
     //console.log(checkThrees)
     //console.log(threesRolled)
     if (threesRolled === 0){
        rollTwoDiceCount = 5 - 1 
     } else{
        rollTwoDiceCount = 5 - threesRolled
     }
  
     console.log(rollTwoDiceCount)

  } 
//after roll 1 I want to count the number of dice
//that do not have value 3 minus the lowest dice
//this will give me the total number of dice of roll two


function secondRoll(){
  console.log("on the secon roll")
}



function thirdRoll(){
console.log("on the thrid roll")
}


function fourthRoll(){
console.log("on fourth roll")
}

function finalRoll(){
console.log("on last roll")
}


function genRan(){
    let value = Math.floor(Math.random() * 6) +1
    return value
}

// generateRandom()
// console.log(generateRandom())
