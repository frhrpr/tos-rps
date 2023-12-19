let options = ['paper', 'rock', 'scissors'];

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();    

    if (playerSelection == computerSelection) {
        return(0) //draw
    }

    if ((options.indexOf(playerSelection)+1)%2 == options.indexOf(computerSelection)) {
        return(1) //computer won
    } else {
        return(2) //player won
    }
}

function getComputerChoice() {
    return(options[Math.floor(Math.random() * options.length)])
}
   
function game() {
    let score = [0,0,0];
    players = ['Nobody', 'Computer', 'Player'];
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("What is your choice?")

        result = playRound(playerSelection, computerSelection);
        score[result] += 1;
        console.log(players[result] + " won!");
    }

    console.log("Game over; the player won " +
    score[2] + " times, the computer won " +
    score[1] + " times, with " +
    score[0] + " draw(s)."
    )
}

game()