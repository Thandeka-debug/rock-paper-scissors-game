// Game variables
let playerScore = 0;
let computerScore = 0;
let playerMove = '';
let computerMove = '';

// DOM elements
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultMessageEl = document.getElementById('result-message');
const playerMoveEl = document.getElementById('player-move');
const computerMoveEl = document.getElementById('computer-move');
const timestampEl = document.getElementById('timestamp');

// Get all choice buttons
const choiceButtons = document.querySelectorAll('.choice');
const resetButton = document.getElementById('reset-btn');

// Update timestamp (for screenshot requirement)
function updateTimestamp() {
    const now = new Date();
    timestampEl.textContent = `Last played: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
}

// Computer makes a random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Get emoji for move display
function getMoveEmoji(move) {
    switch(move) {
        case 'rock': return '🪨';
        case 'paper': return '📄';
        case 'scissors': return '✂️';
        default: return '-';
    }
}

// Determine winner
function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        playerScore++;
        return "You win! 🎉";
    } else {
        computerScore++;
        return "Computer wins! 💻";
    }
}

// Update the UI
function updateGame(playerChoice, computerChoice, result) {
    // Update scores
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    
    // Update moves display with emojis
    playerMoveEl.textContent = `${getMoveEmoji(playerChoice)} ${playerChoice}`;
    computerMoveEl.textContent = `${getMoveEmoji(computerChoice)} ${computerChoice}`;
    
    // Update result message
    resultMessageEl.textContent = result;
    
    // Update timestamp
    updateTimestamp();
}

// Handle player's choice
function playGame(playerChoice) {
    computerMove = getComputerChoice();
    const result = determineWinner(playerChoice, computerMove);
    updateGame(playerChoice, computerMove, result);
}

// Reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
    playerMoveEl.textContent = '-';
    computerMoveEl.textContent = '-';
    resultMessageEl.textContent = 'Click a button to start!';
    updateTimestamp();
}

// Add event listeners to choice buttons
choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const choice = button.id; // 'rock', 'paper', or 'scissors'
        playGame(choice);
    });

// Add welcome message in console
console.log("🎮 Let's play Rock Paper Scissors! 🎮");

});

// Add event listener to reset button
resetButton.addEventListener('click', resetGame);

// Initialize timestamp on page load
updateTimestamp();