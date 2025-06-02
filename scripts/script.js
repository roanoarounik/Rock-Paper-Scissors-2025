let cpuWins = 0;
let playerWins = 0;

let usrChce = document.querySelector(`.usrChce`);
let cpuChce = document.querySelector(`.cpuChce`);
let cpuWinsField = document.querySelector(`.cpuWins`);
let playerWinsField = document.querySelector(`.playerWins`);
let gameEndStateField = document.querySelector(`.gameEndStateField`);

let cpuChoiceButtons = document.querySelectorAll(`.cpuChoiceButton`);
let userChoiceButtons = document.querySelectorAll(`.userChoiceButton`);

let choicesObject = {
    rock: `scissors`,
    paper: `rock`,
    scissors: `paper`,
}

let choicesArray = Object.keys(choicesObject);
let amountOfChoices = choicesArray.length;
let generateRandomNumberUpToMax = (maxNumber) => Math.floor(Math.random() * maxNumber);

function playGame(usersChoice) {
    let randomNumberInRange = generateRandomNumberUpToMax(amountOfChoices);
    let cpuChoice = choicesArray[randomNumberInRange];

    usrChce.innerHTML = usersChoice;
    cpuChce.innerHTML = cpuChoice;

    let cpuChoiceButton = document.querySelector(`.${cpuChoice}`);
    cpuChoiceButton.classList.add(`cpu_selected`);

    let gameEndStateMessage = ``;

    if (usersChoice == cpuChoice) {
        gameEndStateMessage = `It's A Draw!`;
    } else if (choicesObject[usersChoice] == cpuChoice) {
        playerWins = playerWins + 1;
        gameEndStateMessage = `You Win!`;
        playerWinsField.innerHTML = playerWins;
    } else {
        cpuWins = cpuWins + 1;
        gameEndStateMessage = `You Lose!`;
        cpuWinsField.innerHTML = cpuWins;
    }

    gameEndStateField.innerHTML = gameEndStateMessage;
}

function userSelectChoice(event, choice) {
    userChoiceButtons.forEach(btn => btn.classList.remove(`selected`));
    cpuChoiceButtons.forEach(btn => btn.classList.remove(`cpu_selected`));
    let target = event.target;
    target.classList.add(`selected`);
    playGame(choice);
}