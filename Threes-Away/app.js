let rollButton = document.querySelector(".roll");
let diceOne = document.querySelector("#dice1");
let diceTwo = document.querySelector("#dice2");
let diceThree = document.querySelector("#dice3");
let diceFour = document.querySelector("#dice4");
let diceFive = document.querySelector("#dice5");
let rOne = document.querySelector("#rolled1");
let rTwo = document.querySelector("#rolled2");
let rThree = document.querySelector("#rolled3");
let rFour = document.querySelector("#rolled4");
let rFive = document.querySelector("#rolled5");
let rollCount = document.querySelector(".roll-num")
let updateSum = document.querySelector(".sum")
let endButton = document.querySelector(".end")
let playerNum = document.querySelector(".pop-player")
let scoreTable = document.querySelector(".score-table")
rollButton.addEventListener("click", turnBegin)
endButton.addEventListener("click" , endTurn)



let numberPlayers = document.querySelector("#total-players").value
console.log(numberPlayers)

let playerCounter = 1
let count = 0
let score = 0
let rolledDice = []
let unrolledDice = []
let playerDisplay = 1
playerNum.innerText = 1

if (rolledDice.length !== 5){
  endButton.classList.add("hidden")
} else if (rolledDice.length > 4){
  endButton.classList.remove("hidden")
}

function turnBegin(){
  if (count === 0 && rolledDice.length <=5){
    initRoll()
    count++
    //rollCount.innerText = count
    updateScore()
  } else if(count === 1 && rolledDice.length <=5){
    secondRoll()
    count++
    //rollCount.innerText = count
      updateScore()
  } else if (count === 2 && rolledDice.length <=5){
    thirdRoll()
    count++
    //rollCount.innerText = count
      updateScore()
  } else if(count === 3 && rolledDice.length <=5){
    fourthRoll()
    count++
   // rollCount.innerText = count
    updateScore()
  } else if(count === 4 && rolledDice.length <=5){
    fifthRoll()
    count++
    //rollCount.innerText = count
    updateScore()
  } else {
   console.log("stop clicking")
  }

}

function initRoll(){
  unrolledDice = Array.from({length: 5 } , genRan)
    displayUnrolled()
    minAndThrees()
     if (threesRolled == 0){
        rollTwoDiceCount = 5 - 1
        rolledDice.push(min) 
     } else if (threesRolled !== 0 && rolledDice.length <5){
        rollTwoDiceCount = 5 - threesRolled
        rolledDice.push(...checkThrees)
     } else {
       console.log(`array full`)
     }
     displayRolled()
  } 

function secondRoll(){
  unrolledDice = Array.from({length: rollTwoDiceCount } , genRan)
  displayUnrolled()
  minAndThrees()
  if (threesRolled == 0){
  rollThreeDiceCount = rollTwoDiceCount - 1
  rolledDice.push(min) 
} else if(threesRolled !== 0 && rolledDice.length <5){
  rollThreeDiceCount = rollTwoDiceCount - threesRolled
  rolledDice.push(...checkThrees)
} else {
  console.log(`array full`)
}
displayRolled()
}

function thirdRoll(){
  unrolledDice = Array.from({length: rollThreeDiceCount} , genRan)
  displayUnrolled()
  minAndThrees()
  if (threesRolled == 0){
    rollFourDiceCount = rollThreeDiceCount - 1
    rolledDice.push(min) 
  } else if(threesRolled !== 0 && rolledDice.length <5){
    rollFourDiceCount = rollThreeDiceCount - threesRolled
    rolledDice.push(...checkThrees)
  } else {
    console.log(`array full`)
  }
  displayRolled()
}

function fourthRoll(){
  unrolledDice = Array.from({length: rollFourDiceCount} , genRan)
  displayUnrolled()
  minAndThrees()
  if (threesRolled == 0){
    rollFiveDiceCount = rollFourDiceCount - 1
    rolledDice.push(min) 
  } else if (threesRolled !== 0 && rolledDice.length <=5){
    rollFiveDiceCount = rollFourDiceCount - threesRolled
    rolledDice.push(...checkThrees)    
  } else {
    console.log(`array full`)
  }
  displayRolled()
}

function fifthRoll(){
  unrolledDice = Array.from({length: rollFiveDiceCount} , genRan)
  displayUnrolled()
  minAndThrees()
  if (threesRolled == 0){
    rollSixDiceCount = rollFiveDiceCount - 1
    rolledDice.push(min) 
  } else if (threesRolled !== 0 && rolledDice.length < 5){
    rollSixDiceCount = rollFiveDiceCount - threesRolled
    rolledDice.push(...checkThrees)
  } else{
    console.log(`array full`)
  }
  displayRolled()
}

function genRan(){
    let value = Math.floor(Math.random() * 6) +1
    return value
}

function updateScore(){
  if (rolledDice.length <=5){
  notZero =rolledDice.filter(num => num !== 3)
  let sum = notZero.reduce((a, b) => a + b, 0)
  updateSum.innerText = sum
  console.log(sum);
  }
}

function displayUnrolled(){
  diceOne.innerText = unrolledDice[0]
  diceTwo.innerText = unrolledDice[1]
  diceThree.innerText = unrolledDice[2]
  diceFour.innerText = unrolledDice[3]
  diceFive.innerText = unrolledDice[4]
}

function displayRolled(){
  rOne.innerText = rolledDice[0]
  rTwo.innerText = rolledDice[1]
  rThree.innerText = rolledDice[2]
  rFour.innerText = rolledDice[3]
  rFive.innerText = rolledDice[4]
}

function minAndThrees(){
  min = Math.min.apply(Math, unrolledDice)
  checkThrees = unrolledDice.filter(num => num ===3)
  threesRolled = checkThrees.length
}


//need to make a conditions that says if and only if
//the rolledDice array has length of 5 then the end turn button can be pressed
//can add a class to hide the the end turn button when the dice array is not 5


function endTurn(){
  playerCounter = playerCounter + 1
  
  console.log(playerCounter)
  //when player Counter hit the number in the form value, stop appending
  // that is when the score needs to be calculated and a comparison needs to be made. 
  count = 0
  rolledDice = []
  unRolledDice = []
  displayRolled()
  displayUnrolled()
  playerDisplay++
  playerNum.innerText = playerDisplay
  let pscore = document.createElement("li")
 let finalScore = document.querySelector(".sum").innerText
  pscore.appendChild(document.createTextNode(`Player ${playerDisplay -1} scored: ${finalScore} `))
  scoreTable.appendChild(pscore)
}