
function getComputerChoice() {
    let weaponList = ['rock', 'paper', 'scissors'];
    let weaponChoice = weaponList[Math.floor(Math.random() * weaponList.length)];
    return weaponChoice;
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt("Choose Rock, Paper, or Scissors!").toLowerCase();
    } 

    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection);

    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
        console.log("Player: " + playerCount + " // " + "Computer: " + computerCount);
        return;
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerCount++;
            console.log("You Lose! Paper beats Rock!");
            console.log("Player: " + playerCount + " // " + "Computer: " + computerCount);
        }
        else {
            playerCount++;
            console.log("You Win! Rock beats Scissors!");
            console.log("Player: " + playerCount + " // " + "Computer: " + computerCount);
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerCount++;
            console.log("You Win! Paper beats Rock!");
            console.log("Player: " + playerCount + " // " + "Computer: " + computerCount);
        } 
        else {
            computerCount++;
            console.log("You Lose!  Scissors beats Paper!");
            console.log("Player: " + playerCount + " // " + "Computer: " + computerCount);
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerCount++;
            console.log("You Lose! Rock beats Scissors!");
            console.log("Player: " + playerCount + " // " + "Computer: " + computerCount);
        } 
        else {
            playerCount++;
            console.log("You Win! Scissors beats Paper!");
            console.log("Player: " + playerCount + " // " + "Computer: " + computerCount);
        }
    }
}

let playerCount = 0;
let computerCount = 0;

function game() {
    for (let i=0; i < 5; i++) {
        console.log("ROUND " + (i + 1))
        playRound();
    }

    if (playerCount === computerCount) console.log("Tie game ¯\_(ツ)_/¯");
    if (playerCount > computerCount) console.log("YOU WON THE GAME");
    if (playerCount < computerCount) console.log("You lost the game :(");

    playerCount = 0;
    computerCount = 0;
}