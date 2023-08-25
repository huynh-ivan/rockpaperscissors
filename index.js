
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

    //Declare Variables
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    
    //Declare playRound() function
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
    //Console.log the results of the round
    console.log(playRound());
    
    //Display the results of each round within the #results container
    const results = document.querySelector('#results');
    const roundResult = document.createElement('div');
    roundResult.classList.add('roundResult')
    roundResult.textContent = playRound();

    //Display the winner of the round in a new div that appears when either player score or computer score equals 5
    function increaseScore { 
        let playerScore = 0;
        let computerScore = 0; 
        if (playRound().match(/win/) === true) {
            playerScore += 1
        } else if (playRound().match(/lose/) === true) {
            computerScore +=1
        } else {
            playerScore = playScore;
            computerScore = computerScore;
        };
    };

    //Display the player's choice in it's own container
    //Display the player's score in the same container

    //Display the computer choice in it's own container
    //Display the player's score in the same container



    /*const showPlayerChoice = document.createElement('div');
    showPlayerChoice.textContent = `You chose ${playerSelection}`;

    const showComputerChoice = document.createElement('div');
    showComputerChoice.textContent = `Computer chose ${computerSelection}`;

    roundResult.appendChild(showPlayerChoice);
    roundResult.appendChild(showComputerChoice);

    results.appendChild(roundResult);
    */
    //Delete current score and replace it with the next roundResult
    });
});



