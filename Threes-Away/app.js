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
let player = document.querySelector(".player")
let scoreTable = document.querySelector(".score-table")
let scoreBox = document.querySelector(".score-box")
let displayTie = document.querySelector("h3")
rollButton.addEventListener("click", turnBegin)

let numberPlayers = null
let targetForm = document.querySelector("#form1")
targetForm.addEventListener("submit" , function(ev){
  ev.preventDefault()
  numberPlayers = document.querySelector("#total-players").value
})

let count = 0
let score = 0
let rolledDice = []
let unrolledDice = [] 
let playerDisplay = 1
playerNum.innerText = 1

function turnBegin(){
  if (count === 0 && rolledDice.length <=5){
    initRoll()
    count++
    updateScore()
  } else if(count === 1 && rolledDice.length <=5){
    secondRoll()
    count++
      updateScore()
  } else if (count === 2 && rolledDice.length <=5){
    thirdRoll()
    count++
      updateScore()
  } else if(count === 3 && rolledDice.length <=5){
    fourthRoll()
    count++
    updateScore()
  } else if(count === 4 && rolledDice.length <=5){
    fifthRoll()
    count++
    updateScore()
  } if (count > 0 && rolledDice.length > 4) {
    endButton.addEventListener("click" , endTurn)
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
  }
}

//map
let diceMap = {
  1: "https://cesarurueta34.github.io/Threes-Away/dice1.png" , 
  2: "https://cesarurueta34.github.io/Threes-Away//dice2.png" ,
  3: "https://cesarurueta34.github.io/Threes-Away//dice3.png" , 
  4: "https://cesarurueta34.github.io/Threes-Away//dice4.png" , 
  5: "https://cesarurueta34.github.io/Threes-Away//dice5.png" , 
  6: "https://cesarurueta34.github.io/Threes-Away//dice6.png" ,
  7: "https://cesarurueta34.github.io/Threes-Away//blank.png"
}

function displayUnrolled(){
  diceOne.style.backgroundImage = `url(${diceMap[unrolledDice[0]]})`
  diceTwo.style.backgroundImage = `url(${diceMap[unrolledDice[1]]})`
  diceThree.style.backgroundImage = `url(${diceMap[unrolledDice[2]]})`
  diceFour.style.backgroundImage = `url(${diceMap[unrolledDice[3]]})`
  diceFive.style.backgroundImage = `url(${diceMap[unrolledDice[4]]})`
}

let diceEl2 = [rOne, rTwo, rThree , rFour, rFive]
function displayRolled(){
  for (let i = 0; i <rolledDice.length; i++){
    diceEl2[i].style.backgroundImage = `url(${diceMap[rolledDice[i]]})`
  }
}

function minAndThrees(){
  min = Math.min.apply(Math, unrolledDice)
  checkThrees = unrolledDice.filter(num => num ===3)
  threesRolled = checkThrees.length
}

let winner = []
function endTurn(){ 
  count = 0
  rolledDice = []
  unRolledDice = []
  resetRolled()
  playerDisplay++
  playerNum.innerText = playerDisplay
  let pscore = document.createElement("li")
 let finalScore = document.querySelector(".sum").innerText
 if(document.querySelectorAll("li").length < numberPlayers) {
  pscore.appendChild(document.createTextNode(`Player ${playerDisplay -1} scored: ${finalScore} `))
  scoreTable.appendChild(pscore)
  winner.push(`${finalScore}`)
 } if (document.querySelectorAll("li").length >= numberPlayers) {
   playerNum.classList.add("hidden")
   updateSum.classList.add("hidden")
   scoreBox.classList.add("hidden")
   player.classList.add("hidden")
indexWinner()
 }
let winnerStyle = document.querySelectorAll("li")[`${indexOfWinner}`]
winnerStyle.classList.add("color")
}
function resetRolled(){
  rOne.style.backgroundImage = `url(${diceMap[7]})`
  rTwo.style.backgroundImage = `url(${diceMap[7]})`
  rThree.style.backgroundImage = `url(${diceMap[7]})`
  rFour.style.backgroundImage = `url(${diceMap[7]})`
  rFive.style.backgroundImage = `url(${diceMap[7]})`

  diceOne.style.backgroundImage = `url(${diceMap[unrolledDice[7]]})`
  diceTwo.style.backgroundImage = `url(${diceMap[unrolledDice[7]]})`
  diceThree.style.backgroundImage = `url(${diceMap[unrolledDice[7]]})`
  diceFour.style.backgroundImage = `url(${diceMap[unrolledDice[7]]})`
  diceFive.style.backgroundImage = `url(${diceMap[unrolledDice[7]]})`
}
let indexOfWinner = []
function indexWinner(){
let minWinner = Math.min(...winner)
winner.forEach(function(elem, index, array){
  if(elem == minWinner) {indexOfWinner.push(index)}
  return indexOfWinner
}) 
if (indexOfWinner.length > 1){
  displayTie.innerText = `Press refresh and select new number of players to play again`
}
}