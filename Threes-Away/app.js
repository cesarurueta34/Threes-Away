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
  if (count === 0 ){ 
    count++
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
  } 
//after roll 1 I want to count the number of dice
//that do not have value 3 minus the lowest dice
//this will give me the total number of dice of roll two

}
function select(){
    //add listeners to pull the items that need to be pulled away. here auto take away the threes
}

function rollTwo(){

}



function rollThree(){

}


function rollFour(){

}

function rollFive(){

}


function genRan(){
    let value = Math.floor(Math.random() * 6) +1
    return value
}

// generateRandom()
// console.log(generateRandom())
