let scoreDiv = document.querySelector('#score')
let buttons = document.querySelector('#buttons')
buttons.querySelectorAll('button').forEach(button =>
    button.addEventListener('click', (e) =>
    (playRound(e.target.textContent))))

let options = ['rock', 'paper', 'scissors'];
let score = [0,0,0]

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    
    let result = -1

    
    if (playerSelection == computerSelection) {
        result = 0
    } else if ((options.indexOf(computerSelection)+1)%3 == options.indexOf(playerSelection)) {
        result = 1 //player won
    } else {
        result = 2 //computer won
    }
    score[result] += 1
    scoreDiv.textContent = score

    console.log(playerSelection, computerSelection, result)

}

function getComputerChoice() {
    return(options[Math.floor(Math.random() * options.length)])
}