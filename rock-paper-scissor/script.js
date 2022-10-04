'use strict';

const options = ["rock", "paper", "scissor"];

let playerScore = 0;
let computerScore = 0;
let round = 5;

const playerScoreEll = document.querySelector("#player p:last-child");
const compScoreEll = document.querySelector("#computer p:last-child");

function isOptionWinAgainst(option1 = "", option2 = "") {
    if (option1.length === 0 || option2.length === 0) {
        throw "option1 or option2 is blank";
    }

    switch (option1) {
        case "rock":
            return isRockWinAgainst(option2);
        case "paper":
            return isPaperWinAgainst(option2);
        default:
            return isScissorWinAgainst(option2);
    }
}

function isRockWinAgainst(option1 = "") {
    if (option1.length === 0) {
        throw "option1 is blank";
    }

    switch (option1) {
        case "paper":
            return false;
        case "scissor":
            return true;
        default:
            return false;
    }
}

function isPaperWinAgainst(option1 = "") {
    if (option1.length === 0) {
        throw "option1 is blank";
    }

    switch (option1) {
        case "scissor":
            return false;
        case "rock":
            return true;
        default:
            return false;
    }
}

function isScissorWinAgainst(option1 = "") {
    if (option1.length === 0) {
        throw "option1 is blank";
    }

    switch (option1) {
        case "rock":
            return false;
        case "paper":
            return true;
        default:
            return false;
    }
}

function getRandomOption() {
    let random = Math.floor(Math.random() * 3);
    return options[random];
}


function getComputerDecision() {
    return getRandomOption();
}

function updateScore() {
    playerScoreEll.textContent = playerScore;
    compScoreEll.textContent = computerScore;
}

function game(option = "") {
    let compOption = getComputerDecision();
    if (isOptionWinAgainst(option, compOption)) {
        playerScore++;
    } else {
        computerScore++;
    }
    updateScore();
}



const rock = document.querySelector("#rock")
    .addEventListener("click", () => {
        game("rock");
    });

const paper = document.querySelector("#paper")
    .addEventListener("click", () => {
        game("rock");
    });

const scissor = document.querySelector("#scissor")
    .addEventListener("click", () => {
        game("rock");
    });
