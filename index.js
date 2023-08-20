
// Declare global variables
const rock = "rock";
const paper = "paper";
const scissors = "scissors"; 


// The code below creates the computer choice

function randomInt(max) { // this function returns a random int from 0 to 2
    return Math.floor(Math.random() * max);
}

function getComputerChoice() { // Create a function that will automatically return "rock". "paper", or "scissors" based on the output of randomInt
    let computerChoice = randomInt(3);
    if (computerChoice === 0) {
        return rock;
    }
    else if (computerChoice === 1) {
        return paper;
    }
    else {
        return scissors;
    }
};



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
       let playerSelection = button.id;
       let computerSelection = getComputerChoice();
       
       function playRound() {
        console.log(playerSelection);
        console.log(computerSelection);
    
        return (playerSelection === rock && computerSelection === scissors) ? "You win! Rock beats scissors."
            : (playerSelection === rock && computerSelection === paper) ? "You lose. Paper beats rock."
            : (playerSelection === paper && computerSelection === rock ) ? "You win! Paper beats rock."
            : (playerSelection === paper && computerSelection === scissors) ? "You lose. Scissors beat paper."
            : (playerSelection === scissors && computerSelection === paper) ? "You win! Scissors beat paper."
            : (playerSelection === scissors && computerSelection === rock) ? "You lose. Rock beats scissors"
            : (playerSelection === computerSelection) ? "You tied."
            : (playerSelection !== rock || paper || scissors) ? "Input is invalid. Try a new value."
            : "";
        };
       
        console.log(playRound())
    });
});


