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
let updateSum =document.querySelector(".sum")

rollButton.addEventListener("click", turnBegin)

let count = 0
let score = 0
//score value is pulled from the unrolled dice array
let rolledDice = []
let unrolledDice = []

function turnBegin(){
  if (count === 0){
    initRoll()
    count++
    rollCount.innerText = count
    checkScore()
  } else if(count === 1){
    secondRoll()
    count++
    rollCount.innerText = count
    checkScore()
  } else if (count === 2){
    thirdRoll()
    count++
    rollCount.innerText = count
    checkScore()
  } else if(count === 3){
    fourthRoll()
    count++
    rollCount.innerText = count
    checkScore()
  } else if(count === 4){
    fifthRoll()
    count++
    rollCount.innerText = count
    checkScore()
  } else {
   console.log("stop clicking")
  }

}

function initRoll(){

  unrolledDice = Array.from({length: 5 } , genRan)

     diceOne.innerText = unrolledDice[0]
     diceTwo.innerText = unrolledDice[1]
     diceThree.innerText = unrolledDice[2]
     diceFour.innerText = unrolledDice[3]
     diceFive.innerText = unrolledDice[4]
     let arrayOne = [unrolledDice[0] , unrolledDice[1], unrolledDice[2], unrolledDice[3], unrolledDice[4]]
     let checkThrees = arrayOne.filter(num => num === 3)
    min = Math.min.apply(Math, arrayOne)
     threesRolled = checkThrees.length
     //console.log(checkThrees)
     //console.log(threesRolled)
    // console.log(`min one is ${minOne}`)
     if (threesRolled == 0){
        rollTwoDiceCount = 5 - 1
        rolledDice.push(min) 
        //console.log(`the lowest dice was ${rolledDice}`)
        console.log(`the number of dice to be rolled on the next turn is ${rollTwoDiceCount}`);
     } else if (threesRolled !== 0 && rolledDice.length <5){
        rollTwoDiceCount = 5 - threesRolled
        rolledDice.push(...checkThrees)
        console.log(`the number of dice to be rolled on the next turn is ${rollTwoDiceCount}`)
        //console.log(checkThrees)
     } else {
       console.log(`array full`)
     }
      rOne.innerText = rolledDice[0]
      rTwo.innerText = rolledDice[1]
      rThree.innerText = rolledDice[2]
      rFour.innerText = rolledDice[3]
      rFive.innerText = rolledDice[4]
  } 
//after roll 1 I want to count the number of dice
//that do not have value 3 minus the lowest dice
//this will give me the total number of dice of roll two

function secondRoll(){

unrolledDice = Array.from({length: rollTwoDiceCount } , genRan)
diceOne.innerText = unrolledDice[0]
diceTwo.innerText = unrolledDice[1]
diceThree.innerText = unrolledDice[2]
diceFour.innerText = unrolledDice[3]
diceFive.innerText = unrolledDice[4]
console.log(`your second role was ${unrolledDice}`)
min = Math.min.apply(Math, unrolledDice)
checkThrees2 = unrolledDice.filter(num => num ===3)
threesRolled2 = checkThrees2.length
//console.log(`Minimum on roll two is ${minTwo}`)
//console.log(`you rolled ${threesRolled2} three on your second roll`)

if (threesRolled2 == 0){
  rollThreeDiceCount = rollTwoDiceCount - 1
  rolledDice.push(min) 
  console.log(`the number of dice to be rolled on the next turn is ${rollThreeDiceCount}`);
} else if(threesRolled2 !== 0 && rolledDice.length <5){
  rollThreeDiceCount = rollTwoDiceCount - threesRolled2
  rolledDice.push(...checkThrees2)
  console.log(`the number of dice to be rolled on the next turn is ${rollThreeDiceCount}`)
} else {
  console.log(`array full`)
}

rOne.innerText = rolledDice[0]
rTwo.innerText = rolledDice[1]
rThree.innerText = rolledDice[2]
rFour.innerText = rolledDice[3]
rFive.innerText = rolledDice[4]
}


function thirdRoll(){
  unrolledDice = Array.from({length: rollThreeDiceCount} , genRan)
diceOne.innerText = unrolledDice[0]
diceTwo.innerText = unrolledDice[1]
diceThree.innerText = unrolledDice[2]
diceFour.innerText = unrolledDice[3]
diceFive.innerText = unrolledDice[4]
  //console.log(`Your third role was ${unrolledDice}`)
  min = Math.min.apply(Math, unrolledDice)
  checkThrees3 =unrolledDice.filter(num => num ===3)
  threesRolled3 =checkThrees3.length

  if (threesRolled3 == 0){
    rollFourDiceCount = rollThreeDiceCount - 1
    rolledDice.push(min) 
    console.log(`the number of dice to be rolled on the next turn is ${rollFourDiceCount}`);
  } else if(threesRolled3 !== 0 && rolledDice.length <5){
    rollFourDiceCount = rollThreeDiceCount - threesRolled3
    rolledDice.push(...checkThrees3)
    console.log(`the number of dice to be rolled on the next turn is ${rollFourDiceCount}`)
    
  } else {
    console.log(`array full`)
  }

  rOne.innerText = rolledDice[0]
  rTwo.innerText = rolledDice[1]
  rThree.innerText = rolledDice[2]
  rFour.innerText = rolledDice[3]
  rFive.innerText = rolledDice[4]
}


function fourthRoll(){

  unrolledDice = Array.from({length: rollFourDiceCount} , genRan)
  //console.log(`Your fourth role was ${arrayFourth}`)
  diceOne.innerText = unrolledDice[0]
  diceTwo.innerText = unrolledDice[1]
  diceThree.innerText = unrolledDice[2]
  diceFour.innerText = unrolledDice[3]
  diceFive.innerText = unrolledDice[4]
  min =Math.min.apply(Math, unrolledDice)
  checkThrees4 =unrolledDice.filter(num => num ===3)
  threesRolled4 =checkThrees4.length

  if (threesRolled4 == 0){
    rollFiveDiceCount = rollFourDiceCount - 1
    rolledDice.push(min) 
    console.log(`the number of dice to be rolled on the next turn is ${rollFiveDiceCount}`);
  } else if (threesRolled4 !== 0 && rolledDice.length <=5){
    rollFiveDiceCount = rollFourDiceCount - threesRolled4
    rolledDice.push(...checkThrees4)
    console.log(`the number of dice to be rolled on the next turn is ${rollFiveDiceCount}`)
    
  } else {
    console.log(`array full`)
  }

  rOne.innerText = rolledDice[0]
  rTwo.innerText = rolledDice[1]
  rThree.innerText = rolledDice[2]
  rFour.innerText = rolledDice[3]
  rFive.innerText = rolledDice[4]

}

function fifthRoll(){

  unrolledDice = Array.from({length: rollFiveDiceCount} , genRan)
  diceOne.innerText = unrolledDice[0]
  diceTwo.innerText = unrolledDice[1]
  diceThree.innerText = unrolledDice[2]
  diceFour.innerText = unrolledDice[3]
  diceFive.innerText = unrolledDice[4]
//console.log(`Your fifth role was ${arrayFifth}`)
  min =Math.min.apply(Math, unrolledDice)
  checkThrees5 = unrolledDice.filter(num => num ===3)
  threesRolled5 =checkThrees5.length

  if (threesRolled5 == 0){
    rollSixDiceCount = rollFiveDiceCount - 1
    rolledDice.push(min) 
  } else if (threesRolled5 !== 0 && rolledDice.length < 5){
    rollSixDiceCount = rollFiveDiceCount - threesRolled5
    rolledDice.push(...checkThrees5)
  } else{
    console.log(`array full`)
  }

  rOne.innerText = rolledDice[0]
  rTwo.innerText = rolledDice[1]
  rThree.innerText = rolledDice[2]
  rFour.innerText = rolledDice[3]
  rFive.innerText = rolledDice[4]

}

function genRan(){
    let value = Math.floor(Math.random() * 6) +1
    return value
}

function checkScore(){
  notZero =rolledDice.filter(num => num !== 3)
  let sum = notZero.reduce((a, b) => a + b, 0)
  updateSum.innerText = sum
  console.log(sum);
}
//console.log(rolledDice)