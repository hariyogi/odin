'use strict';

const options = ["rock", "paper", "scissor"];

function isOptionWinAgainst(option1 = "", option2 = "") {
    if(option1.length === 0 || option2.length === 0) {
        throw "option1 or option2 is blank";
    }

    switch(option1) {
        case "rock":
            return isRockWinAgainst(option2);
        case "paper":
            return isPaperWinAgainst(option2);
        default :
            return isScissorWinAgainst(option2);
    }
}

function isRockWinAgainst(option1 = "") {
    if(option1.length === 0) {
        throw "option1 is blank";
    }

    switch(option1) {
        case "paper":
            return false;
        case "scissor":
            return true;
        default: 
            return false;
    }
}

function isPaperWinAgainst(option1 = "") {
    if(option1.length === 0) {
        throw "option1 is blank";
    }

    switch(option1) {
        case "scissor":
            return false;
        case "rock":
            return true;
        default: 
            return false;
    }
}

function isScissorWinAgainst(option1 = "") {
    if(option1.length === 0) {
        throw "option1 is blank";
    }

    switch(option1) {
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

function doPlayerToChose(round = "") {
    let chose = true;
    let result = "";

    while(chose) {
        let option = prompt(` Round ${round} : Chose weapon (rock, paper, scissor) ? `);
        if(option === undefined) {
            console.log("Please chose again,,");
            continue;
        }
        let lowercase = option.toLowerCase();
        if(lowercase !== "rock" && lowercase !== "paper" && lowercase !== "scissor") {
            console.log("Please chose again,,");
            continue;
        }
        result = lowercase;
        chose = false;
    }

    return result;
}

function game() {
    console.log("Welcome to the rock-paper-scissor game");
    let round = Number.parseInt(prompt("Chose game round", "5"));
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < round; i++) {
        let tempRound = i + 1;
        let playerOption = doPlayerToChose(tempRound);
        let computerOption = getComputerDecision();
        if(playerOption === computerOption) {
            alert("draw");
            continue;
        }

        if(isOptionWinAgainst(playerOption, computerOption)) {
            alert(`${playerOption} against ${computerOption} player win :D`)
            playerScore++;
        }else {
            alert(`${playerOption} against ${computerOption} computer win :()`)
            computerScore++;
        }
    }

    alert(`final Score player ${playerScore}, computer ${computerScore} you ${playerScore < computerScore ? "lose" : "win"}`);
}


game();
