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
//Invoke getComputerChoice in this function
    //Create a series of of if/else statements using the `and` operator. These statements should return a message containing the normalized user input and the computer's input.
    
    return (playerSelection === rock && computerSelection === scissors) ? "You win! Rock beats scissors."
        : (playerSelection === rock && computerSelection === rock) ? "It's a draw!"
        : (playerSelection === rock && computerSelection === paper) ? "You lose! Paper beats rock."
        : (playerSelection === paper && computerSelection === rock ) ? "You win! Paper beats rock!"
        : (playerSelection === paper && computerSelection === paper) ? "It's a draw!"
        : (playerSelection === paper && computerSelection === scissors) ? "You lose! Scissors beats paper."
        : (playerSelection === scissors && computerSelection === paper) ? "You win! Scissors beats paper!"
        : (playerSelection === scissors && computerSelection === scissors) ? "It's a draw"
        : (playerSelection === scissors && computerSelection === rock) ? "You lose! Rock beats scissors."
        //: (playerSelection !== rock || paper || scissors) ? "Input is invalid. Try a new value."
        : "";
}
        
console.log(playerSelection);
console.log(computerSelection);    
console.log(playRound(playerSelection, computerSelection));
//prompt("Rock, paper, scissors?");

//RPS is a game played in rounds
//A player wins when they win a majority of rounds (2/3)
//A round is won based of comparing the input of player 1 versus player 2
//During a game, after each round, we need to track whetheer player 1 won or player 2 won 
//For every point allocated to a player, we need to increase their score by 1
//The winner of the game is the first user to win 2 rounds

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
