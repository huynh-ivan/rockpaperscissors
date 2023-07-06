// This is a file where all of the JS functions will be stored

//This is some pseudocode 


// Declare global variables
const rock = "rock";
const paper = "paper";
const scissors = "scissors"; 

//console.log(scissors);
//console.log(typeof(scissors));


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
}

// console.log(getComputerChoice())

//On Review, the getUserChoice function actually isn't necessary because an actual round of the game would prompt the user for input. We'd still need to normalize the responses to return the correct variable though.
/* function getUserChoice(input) { //this function prompts a user to input rock, paper or scissors and ensures that input is both valid and matches the global wariables. 
    
    let userChoice = input.toLowerCase;
    
    
    if (input.toLowerCase() === rock) {
        //console.log(input);
        //console.log(typeof(input)); // if this is the output, the program stopped executing here
        return rock;
    }
    else if (input.toLowerCase() === paper) {
        //console.log(input);
        //console.log(typeof(input)); // if this is the output, the program stopped executing here
        return paper; 
    }
    else if (input.toLowerCase() === scissors) {
        //console.log(input);
        //console.log(typeof(input)); // if this is the output, the program stopped executing here
        return scissors;
    }
    else {
        console.log("buuubuuu");
        alert("This is a buuubuuu");

    }
}

console.log(getUserChoice("scis")); // After writing out the function, you need to call it in order for it to actually initialize and execute
*/ 

//Prompt the user to input a value and lowercase the return value
let playerSelection = prompt("Rock, Paper, or scissors?", "").toLowerCase();
// console.log(playerSelection)
// console.log(typeof(playerSelection))
// console.log(typeof(rock))
let computerSelection = getComputerChoice();
//console.log(computerSelection[0].toUpperCase());


function playRound(playerSelection, computerSelection) {
    // Invoke getComputerChoice in this function
    // Create a series of of if/else statements using the `and` operator. These statements should return a message containing the normalized user input and the computer's input.
    return (playerSelection === rock && computerSelection === scissors) ? "You win! Rock beats scissors."
        : (playerSelection === rock && computerSelection === paper) ? "You lose! Paper beats rock."
        : (playerSelection === paper && computerSelection === rock ) ? "You win! Paper beats rock!"
        : (playerSelection === paper && computerSelection === scissors) ? "You lose! Scissors beats paper."
        : (playerSelection === scissors && computerSelection === paper) ? "You win! Scissors beats paper!"
        : (playerSelection === scissors && computerSelection === rock) ? "You lose! Rock beats scissors."
        : (playerSelection === computerSelection) ? "It's a draw!"
        : (playerSelection !== rock || paper || scissors) ? "Input is invalid. Try a new value."
        : "";
}
        
console.log(playerSelection);
console.log(computerSelection);    
console.log(playRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;
//let increaseScore = ++playerScore;

//console.log(increaseScore);

// Helper Functions
function scoreRound() { 
    // Calls playRound() and store in the result variable
    let result = playRound(playerSelection, computerSelection);
    
    // Determine if player or computer wins
    // increment playerScore or computerScore by 1
    
    return (result.includes("win")) ? console.log(++playerScore)
        : (result.includes("lose")) ? console.log(++computerScore)
        : (result.includes("draw")) ? console.log(playerScore++ & computerScore++)
        : (result.includes("invalid")) ? "Invalid outcome" 
        : "How'd you get here?";
}

console.log(scoreRound());


//Game function

//function game() {

    



    /* let winRound = playRound(playerSelection, computerSelection); 

    //If the return includes "win", increment the user's score by 1
    (winRound.includes("win")) ? playerScore++
        //If the return includes "lose", increment the computer score by 1
        : (winRound.includes("lose")) ? computerScore++
        //If the return includes "draw", increment each player's score by 0
        : (winRound.includes("draw")) ? playerScore += 0, computerScore += 0
        : (winRound.includes("invalid")) ? alert("the input is invalid")
        : 
    */


    
    //the loop condition feels like it'd be an "or" situation (i.e either player's score reaches 3); this may need to be a block statement because there are two conditions
    //we can set the default vlaue of playerScore and computerScore to be 0; this is the initialization
    //For every point allocated to a player, we need to increase their score by 1
    //the loop should terminate when one player's score equals 3
    //we'll need an if/else statement to return who the winner is to the console
    
    //Play till the first player reaches a score of 3 (which is theoretically more than 5 rounds)
    




//prompt("Rock, paper, scissors?");

//RPS is a game played in rounds
//A player wins when they win a majority of rounds (2/3)
//A round is won based of comparing the input of player 1 versus player 2


//If input 1 = rock
//and input 2 = scissors, input 1 would win and input 2 would lose
//and input 2 = paper, input 1 would lose and input 2 would win
//and input 2 = rock (i.e. itself), this would result in a tie between input 1 and input 2
//and input 2 != rock, paper, or scissors, it is invalid and the round is re-done

//If input 1 = scissor
//and input 2 = paper input 1 would win and input 2 would lose
//and input 2 = rock input 1 would lose and input 2 would win
//and input 2 = scissor (i.e. itself), this would result in a tie between input 1 and input 2
//and input 2 != rock, paper, or scissors, it is invalid and the round is re-done

//If input 1 = paper
//and input 2 = rock input 1 would win and input 2 would lose
//and input 2 = scissor input 1 would lose and input 2 would win
//and input 2 = paper  (i.e. itself), this would result in a tie between input 1 and input 2
//and input 2 != rock, paper, or scissors, it is invalid and the round is re-done
