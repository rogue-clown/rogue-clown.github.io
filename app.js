const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

// possible choices for computer are pulling from all the buttons
// if there are a lot of buttons you'd want to use classes and get by class
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    // save user choice when someone clicks on the button
    userChoice = e.target.id;
    console.log(e.target);
    userChoiceDisplay.innerHTML = userChoice;

    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    // const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    
    // if (randomNumber === 0) {
    //     computerChoice = "rock";
    // }

    // if (randomNumber === 1) {
    //     computerChoice = "paper";
    // }

    // if (randomNumber === 2) {
    //     computerChoice = "scissors";
    // }

    computerChoiceDisplay.innerHTML = "scissors";
}

function paper() {

    const paperMessages = ["seriously?", "are you kidding me?", "ask yourself the point of this game.", "that one's no fun...", "have you met The Acclaimed?", "this won't win you any belts.", "not familiar with that one...", "what would The Acclaimed do?"]
    
    const randomNumber = Math.floor(Math.random() * paperMessages.length);

    return paperMessages[randomNumber];
}

function rock() {

    const rockMessages = ["it does matter what Daddy Ass's name is!", "no one's cooking anything today.", "no, not that guy who slandered Daddy Ass in '99!", "seriously?", "are you kidding me?", "ask yourself the point of this game.", "that one's no fun...", "have you met The Acclaimed?", "this won't win you any belts.", "not familiar with that one...", "what would The Acclaimed do?"]

    const randomNumber = Math.floor(Math.random() * rockMessages.length);

    return rockMessages[randomNumber];
}

function success() {

    const successMessages = ["OH, SCISSOR ME DADDY!", "SCISSOR ME, DADDY ASS!", "EVERYONE LOVES THE ACCLAIMED!", "✂️✂️✂️"]

    const randomNumber = Math.floor(Math.random() * successMessages.length);

    return successMessages[randomNumber];
}

function getResult() {
    // if (computerChoice === userChoice) {
    //     result = 'it\'s a draw!'
    // } else if (computerChoice === "rock" && userChoice === "paper") {
    //     result = "you win!"
    // } else if (computerChoice === "rock" && userChoice === "scissors") {
    //     result = "you lose!"
    // } else if (computerChoice === "paper" && userChoice === "scissors") {
    //     result = "you win!"
    // } else if (computerChoice === "paper" && userChoice === "rock") {
    //     result = "you lose!"
    // } else if (computerChoice === "scissors" && userChoice === "rock") {
    //     result = "you win!"
    // } else if (computerChoice === "scissors" && userChoice === "paper") {
    //     result = "you lose!"
    // }

    if (userChoice === "scissors") {
        result = success();
    } else if (userChoice === "rock") {
        result = rock();
    } else if (userChoice === "paper") {
        result = paper();
    };

    resultDisplay.innerHTML = result;
}
