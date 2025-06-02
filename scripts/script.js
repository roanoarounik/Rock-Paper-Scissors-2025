// An object is a set of associated Key: Value pairs
// Here is an object that has keys with RPS choices and the values are what that RPS key beats
let choicesObject = {
    rock: `scissors`, // Rock beats Scissors
    paper: `rock`, // Paper beats Rock
    scissors: `paper`, // Scissors beats Paper
}

// This will spawn a prompt on the users browswer with the text `Please Enter Rock, Paper, or Scissors` 
// Then the user can type into the field and whatever the user types will be stored in variable `usersChoice`
// let usersChoice = prompt(`Please Enter Rock, Paper, or Scissors`);

// Now that we have the users choice of Rock, Paper, or Scissors, lets generate a random cpu choice of Rock, Paper, or Scissors

// Turn Choices Object into an Array of just the Objects Keys [`rock`, `paper`, `scissors`] and store that into a variable
let choicesArray = Object.keys(choicesObject);

// Now that it's an Array, we can use array.length to see how many items in the Array (3) and store that into a variable
let amountOfChoices = choicesArray.length;

// This is a function which you can call like generateRandomNumberUpToMax()
// And in the paranthesees enter a max number that the function should not go beyond while generating a random number
let generateRandomNumberUpToMax = (maxNumber) => Math.floor(Math.random() * maxNumber);

// Now that we have the amount of items in the Array in `amountOfChoices`, we can pass that in as the Max for generateRandomNumberUpToMax()
let randomNumberInRange = generateRandomNumberUpToMax(amountOfChoices);
// This function ^ will generate a random number from 0 to the max number passed in, which we are using `amountOfChoices` which is 3

// Now that we have the random generated number in range in variable `randomNumberInRange`, access the array at the index of that
let cpuChoice = choicesArray[randomNumberInRange];
// This will pick a random choice from [`rock`, `paper`, `scissors`], which we can store as `cpuChoice`

console.log(`You Chose ${usersChoice}`);
console.log(`CPU Chose ${cpuChoice}`);

if (usersChoice == cpuChoice) { // They both picked the same choice
    console.log(`It's A Draw!`);
} else if (choicesObject[usersChoice] == cpuChoice) { // Use the choices object to see if the users choice beats the cpu choice
    console.log(`You Win!`);
} else { // If other two conditions are false, assume the user lost
    console.log(`You Lose!`);
}