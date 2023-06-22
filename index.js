// This is a file where all of the JS functions will be stored

//This is some pseudocode 


// Declare global variables
const rock = "rock";
const paper = "paper";
const scissors = "scissors"; 

//console.log(scissors);
//console.log(typeof(scissors));

//Create a function that will return "rock". "paper", or "scissors"
function getComputerChoice(input) {
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
        console.log("buuubuuu")
    }
    //console.log(input);
    console.log(input.toLowerCase());
}

console.log(getComputerChoice('Scissors'))



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