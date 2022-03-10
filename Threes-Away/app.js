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

rollButton.addEventListener("click", turnBegin)

let count = 0

let rolledDice = []
let unrolledDice = []
// let reducedRolledDice = [].concat.apply([], rolledDice)
// console.log(reducedRolledDice)
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
    fifthRoll()
    count++
  } else {
   console.log("stop clicking")
  }

}

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
     if (threesRolled == 0){
        rollTwoDiceCount = 5 - 1
        rolledDice.push(minOne) 
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
arraySecond = Array.from({length: rollTwoDiceCount } , genRan)
console.log(`your second role was ${arraySecond}`)
minTwo = Math.min.apply(Math, arraySecond)
checkThrees2 = arraySecond.filter(num => num ===3)
threesRolled2 = checkThrees2.length
//console.log(`Minimum on roll two is ${minTwo}`)
//console.log(`you rolled ${threesRolled2} three on your second roll`)

if (threesRolled2 == 0){
  rollThreeDiceCount = rollTwoDiceCount - 1
  rolledDice.push(minTwo) 
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
  arrayThird = Array.from({length: rollThreeDiceCount} , genRan)
  console.log(`Your third role was ${arrayThird}`)
  minThree =Math.min.apply(Math, arrayThird)
  checkThrees3 =arrayThird.filter(num => num ===3)
  threesRolled3 =checkThrees3.length

  if (threesRolled3 == 0){
    rollFourDiceCount = rollThreeDiceCount - 1
    rolledDice.push(minThree) 
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

  arrayFourth = Array.from({length: rollFourDiceCount} , genRan)
  console.log(`Your fourth role was ${arrayFourth}`)
  minFour =Math.min.apply(Math, arrayFourth)
  checkThrees4 =arrayFourth.filter(num => num ===3)
  threesRolled4 =checkThrees4.length

  if (threesRolled4 == 0){
    rollFiveDiceCount = rollFourDiceCount - 1
    rolledDice.push(minFour) 
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

  arrayFifth = Array.from({length: rollFiveDiceCount} , genRan)
  console.log(`Your fifth role was ${arrayFifth}`)
  minFive =Math.min.apply(Math, arrayFifth)
  checkThrees5 =arrayFifth.filter(num => num ===3)
  threesRolled5 =checkThrees5.length

  if (threesRolled5 == 0){
    rollSixDiceCount = rollFiveDiceCount - 1
    rolledDice.push(minFive) 
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


//console.log(rolledDice)