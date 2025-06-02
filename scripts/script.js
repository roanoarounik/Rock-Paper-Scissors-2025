let random = (maxNumber) => Math.floor(Math.random() * maxNumber);

let choicesObject = {
    rock: `scissors`,
    paper: `rock`,
    scissors: `paper`,
}

let choicesArray = Object.keys(choicesObject);

let usersChoice = prompt(`Please Enter Rock, Paper, or Scissors`);
let randomNumberInRange = random(choicesArray.length);
let cpuChoice = choicesArray[randomNumberInRange];

console.log(`You Chose ${usersChoice}`);
console.log(`CPU Chose ${cpuChoice}`);

if (usersChoice == cpuChoice) {
    console.log(`It's A Draw!`);
} else if (choicesObject[usersChoice] == cpuChoice) {
    console.log(`You Win`);
} else {
    console.log(`You Lose`);
}