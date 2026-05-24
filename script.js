let humanScore = 0;
let computerScore = 0;
let roundNum = 1;

function createScoreBoardText() {
    const round = document.querySelector("#round");
    round.textContent = `Round ${roundNum}`
    const score = document.querySelector("#score");
    score.textContent = `Your Score: ${humanScore} vs Computer Score ${computerScore}`;
}


function startGame()
{
    createScoreBoardText();
}

startGame();