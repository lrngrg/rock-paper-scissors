
function getComputerChoice() {
    let weaponList = ['rock', 'paper', 'scissors'];
    let weaponChoice = weaponList[Math.floor(Math.random() * weaponList.length)];
    return weaponChoice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        playerSelection = prompt("Choose Rock, Paper, or Scissors!").toLowerCase();
    } 

    computerSelection = getComputerChoice();


    console.log(playerSelection);
    console.log(computerSelection);

    let playerCount = 0;
    let computerCount = 0;

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') {
            computerCount++;
            return "You Lose! Paper beats Rock!";
        }
        else {
            playerCount++;
            return "You Win! Rock beats Scissors!";
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerCount++;
            return "You Win! Paper beats Rock!";
        } 
        else {
            computerCount++
            return "You Lose!  Scissors beats Paper!"
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            computerCount++;
            return "You Lose! Rock beats Scissors!";
        } 
        else {
            playerCount++;
            return "You Win! Scissors beats Paper!";
        }
    }
}

// TEST
// const playerSelection = "sciSSorS";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection))

function game() {
   
    for (let i=0; i < 5; i++) {
        playRound();
    }

    if (playerCount === computerCount) return "It's a tie!";
    if (playerCount > computerCount) return "You win!";
    else return "You lose!"
}