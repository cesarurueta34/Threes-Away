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

let numberPlayers = document.querySelector(".total-players").value

//to make multiplayer, when end turn button pressed (pass over the dice). update display to say PlayerTwo. 
//when end turn is clicked it should reset the count and score back to zero so that the next roller can keep score.
//it should also reset the array rolledDice and unrolled Dice to be empty. when end turn is pressed the data for the player shoudl be stored

//need to creat a div that serves as a scorebox/tally holder that is not deleted and used for the final score comparison

//populate the player one score in another div so that it can be used for comparison
//add abutton that has a prompt for how many players are wanted
//from the information in that button, maximize the size of the player score data storage
//add a calculate winner button


let playerCounter = 1
let count = 0
let score = 0
let rolledDice = []
let unrolledDice = []
let playerDisplay = 1
playerNum.innerText = 1

function turnBegin(){
  if (count === 0){
    initRoll()
    count++
    rollCount.innerText = count
    updateScore()
  } else if(count === 1){
    secondRoll()
    count++
    rollCount.innerText = count
    updateScore()
  } else if (count === 2){
    thirdRoll()
    count++
    rollCount.innerText = count
    updateScore()
  } else if(count === 3){
    fourthRoll()
    count++
    rollCount.innerText = count
    updateScore()
  } else if(count === 4){
    fifthRoll()
    count++
    rollCount.innerText = count
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
  notZero =rolledDice.filter(num => num !== 3)
  let sum = notZero.reduce((a, b) => a + b, 0)
  updateSum.innerText = sum
  //console.log(sum);
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


function endTurn(){
  playerCounter++
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
  //console.log(playerDisplay)
}