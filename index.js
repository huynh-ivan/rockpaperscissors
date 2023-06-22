// This is a file where all of the JS functions will be stored

//This is some pseudocode 


// Declare global variables
const rock = "rock";
const paper = "paper";
const scissors = "scissors"; 

//console.log(scissors);
//console.log(typeof(scissors));


//need to find out how to make this function select automatically
//Possibly use math.random and math.floor somehow?
//math.random can return a random numeric value, and if I assign that number value to a var, that could mimic random selection
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
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
    console.log(computerChoice)

}

// console.log(getComputerChoice())

// randomInt()
// console.log(randomInt(3))

//Create a function that will automatically return "rock". "paper", or "scissors"
//this function is actually more suited for user input by using the prompt. method
/* function getUserChoice = prompt.("Rock, paper or scissors?", input) {
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
// After writing out the function, you need to call it in order for it to actually initialize and execute
getComputerChoice("Ivan wWJFSD aDSFSDre you doing?!")
//console.log(getComputerChoice('heyooooooo'))



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
*/