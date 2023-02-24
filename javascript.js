
let computerCount = 0;
let playerCount = 0;

function getComputerChoice() {
    const weaponList = ['rock', 'paper', 'scissors'];
    const computerChoice = weaponList[Math.floor(Math.random() * weaponList.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return;
  if (playerSelection === 'rock' && computerSelection === 'paper') computerCount++;
  if (playerSelection === 'rock' && computerSelection === 'scissors') playerCount++;
  if (playerSelection === 'paper' && computerSelection === 'scissors') computerCount++;
  if (playerSelection === 'paper' && computerSelection === 'rock') playerCount++;
  if (playerSelection === 'scissors' && computerSelection === 'rock') computerCount++;
  if (playerSelection === 'scissors' && computerSelection === 'paper') playerCount++;
}

const playerScoreElement = document.querySelector('#player');
const computerScoreElement = document.querySelector('#computer');
const resultsElement = document.querySelector('#results');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id, getComputerChoice());
      
      playerScoreElement.textContent = `${playerCount}`;
      computerScoreElement.textContent = `${computerCount}`;
     
      if (playerCount === 5) {
        resultsElement.textContent = 'You win!';
        buttons.forEach((button) => button.setAttribute('disabled', ''));
      }
      if (computerCount === 5) {
        resultsElement.textContent = 'You lose, sad';
        buttons.forEach((button) => button.setAttribute('disabled', ''));
      }
    });
});

