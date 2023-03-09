function computerPlay() {
    let result;
    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        result = `Rock`;
    } else if (randomNumber <= 0.67) {
        result = `Paper`;
    } else {
        result = `Scissors`;
    }
    return result;
}
let computerScore = 0;
let playerScore = 0;

function game() {
    console.log(`Let's play the game "Rock, Paper, Scissors"!`)
    for (let i = 1; i < 6; i++) {
        console.log(`---ROUND №${i}---`);
        function playRound(playerSelection, computerSelection) {
            playerSelection = prompt('Put your choice: Rock, Paper or Scissors?');
            computerSelection = computerPlay();
            let playerAnswer = playerSelection.toLowerCase();
            if (computerSelection === playerAnswer) {
                computerScore++;
                playerScore++;
                return console.log("The friendship won!");
            } else if (playerAnswer === `scissors`) {
                if (computerSelection === `Rock`) {
                    computerScore++;
                    return console.log("You Lose! Rock beats Scissors!");
                } else {
                    playerScore++;
                    return console.log("You Win! Scissors beats Paper");
                }
            } else if (playerAnswer === `rock`) {
                if (computerSelection === `Paper`) {
                    computerScore++;
                    return console.log("You Lose! Paper beats Rock");
                } else {
                    playerScore++;
                    return console.log("You Win! Rock beats Scissors");
                }
            } else if (playerAnswer === `paper`) {
                if (computerSelection === `Scissors`) {
                    computerScore++;
                    return console.log("You Lose! Scissors beats Paper");
                } else {
                    playerScore++;
                    return console.log("You Win! Paper beats Rock");
                }  
            }
            playerScore;
            computerScore;
        }
        playRound();
    }
    return console.log(`Game is over! Results: Computer = ${computerScore}, Player = ${playerScore}`);
}





