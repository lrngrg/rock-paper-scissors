
function getComputerChoice() {
    let weaponList = ['rock', 'paper', 'scissors'];
    let weaponChoice = weaponList[Math.floor(Math.random() * weaponList.length)];
    return weaponChoice;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'paper') return "You Lose! Paper beats Rock!";
        else return "You Win! Rock beats Scissors!";
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') return "You Win! Paper beats Rock!";
        else return "You Lose!  Scissors beats Paper!"
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') return "You Lose! Rock beats Scissors!";
        else return "You Win! Scissors beats Paper!";
    }

}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log("You chose: " + playerSelection);
console.log("The computer chose: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));