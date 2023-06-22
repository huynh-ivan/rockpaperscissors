// This is a file where all of the JS functions will be stored

//This is some pseudocode 

//Create a variable that the computer can use to return a value of "rock", "paper", or "scissors"

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