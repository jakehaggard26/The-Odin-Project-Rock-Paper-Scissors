humanScore = 0;
computerScore = 0;

function createScoreBoardText() {
    const score = document.querySelector("#score");
    console.log(score);
    score.textContent = `Your Score: ${humanScore} vs Computer Score ${computerScore}`;
}


function startGame()
{
    createScoreBoardText();
}

startGame();