
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

//The following code is broken in many places

let playerRunningScore = 0;
let compRunningScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {

    //Declare Variables
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();

    function updateRunningScores() {  
        
        //Declare playRound() function
        function playRound() {
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

        if (playRound().match(/win/)){
            playerRunningScore += 1;
        } else if (playRound().match(/lose/)) {
            compRunningScore += 1;
        } else if (playRound().match(/tied/)) {
            playerRunningScore += 0;
            compRunningScore += 0;
        };
        
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound());
        console.log(playerRunningScore);
        console.log(compRunningScore);
      
        
        //Variables for selecting HTML Elements
        const resultsContainer = document.querySelector('.resultsContainer'); //Target the resultsContainer html element

        const roundResult = document.createElement('div'); //Create a `div` into the html to display the results of a round
        roundResult.textContent = playRound();   

    
        resultsContainer.appendChild(roundResult) // Insert roundResult into the resultsContainer
    
    };
    
    updateRunningScores();
    
    });
});




