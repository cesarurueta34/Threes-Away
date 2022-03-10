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

rollButton.addEventListener("click", turnBegin)

let count = 0

let rolledDice = []

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
let rollThreeDiceCount = 0
let rollFourDiceCount = 0
let rollFiveDiceCount = 0
let minOne = 0
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
    minOne = Math.min.apply(Math, arrayOne)
     threesRolled = checkThrees.length
     //console.log(checkThrees)
     //console.log(threesRolled)
    // console.log(`min one is ${minOne}`)
     if (threesRolled === 0){
        rollTwoDiceCount = 5 - 1
        rolledDice.push(minOne) 
        console.log(`the lowest dice was ${rolledDice}`)
        console.log(`the number of dice to be rolled on the next turn is ${rollTwoDiceCount}`);
     } else{
        rollTwoDiceCount = 5 - threesRolled
        rolledDice.push(checkThrees)
        console.log(`the number of dice to be rolled on the next turn is ${rollTwoDiceCount}`)
        //console.log(checkThrees)
     }
  } 
//after roll 1 I want to count the number of dice
//that do not have value 3 minus the lowest dice
//this will give me the total number of dice of roll two

function secondRoll(){
arraySecond = Array.from({length: rollTwoDiceCount } , genRan)
console.log(`your second role was ${arraySecond}`)
minTwo = Math.min.apply(Math, arraySecond)
checkThrees2 = arraySecond.filter(num => num ===3)
threesRolled2 = checkThrees2.length
console.log(`you rolled ${threesRolled2} three on your second roll`)

if (threesRolled === 0){
  rollThreeDiceCount = rollTwoDiceCount - 1
  rolledDice.push(minTwo) 
  console.log(`the number of dice to be rolled on the next turn is ${rollThreeDiceCount}`);

} else{
  rollThreeDiceCount = rollTwoDiceCount - threesRolled2
  rolledDice.push(checkThrees2)
  console.log(`the number of dice to be rolled on the next turn is ${rollThreeDiceCount}`)
  
}

}


function thirdRoll(){
console.log("on the third roll")
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


console.log(rolledDice)