let playerScore = 0;
let computerScore = 0;
let roundNum = 1;
let gameWinnerStr = "";

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => updateGame("rock"));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => updateGame("paper"));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => updateGame("scissors"));

function resetScoreBoardText()
{
    const round = document.querySelector("#round");
    round.textContent = `Round ${roundNum}`
    
    const score = document.querySelector("#score");
    score.textContent = `Your Score: ${playerScore} vs Computer Score ${computerScore}`;

}

function updateScoreBoardText() {
    
    const round = document.querySelector("#round");

    if(playerScore > computerScore)
    {
        gameWinnerStr = "Player Wins!";
    }
    else if(computerScore > playerScore)
    {
        gameWinnerStr = "Computer Wins!";
    }
    else
    {
        gameWinnerStr = "Draw!"
    }
    
    
    if(roundNum > 5)
    {
         round.textContent = "Game Over. " + gameWinnerStr + " To play just select an option below and begin Round 1."
    }
    else
    {
        round.textContent = `Round ${roundNum}`
    }
    
    const score = document.querySelector("#score");
    score.textContent = `Your Score: ${playerScore} vs Computer Score ${computerScore}`;
}

function updateGameLog(str)
{
    const gameLog = document.querySelector("#game-log");
    const log = document.createElement("p");
    log.textContent = str;
    gameLog.appendChild(log);
}

function resetGame()
{
    playerScore = 0;
    computerScore = 0;
    roundNum = 1;
    
    
    const gameLog = document.querySelector("#game-log");
    elements = gameLog.querySelectorAll("p");
    console.log(elements)
    elements.forEach(element => {
    element.remove();
    });

    const round = document.querySelector("#round");
    round.textContent = `Round ${roundNum}`
    
    const score = document.querySelector("#score");
    score.textContent = `Your Score: ${playerScore} vs Computer Score ${computerScore}`;
}

function updateGame(playerInput) 
{
    let gameString = "";

    // Round Check (If max rounds reached, reset the game)
    if(roundNum > 5)
    {
        resetGame();
    }

    // Generate Computer Pick
    let computerInput = generateComputerPick(); 

    // Check Input to Determine Winner 
    console.log(`Player: ${playerInput}`);
    console.log(`Computer: ${computerInput}`);

    // If player picks rock
    if(playerInput == "rock")
    {
        // if computer picks rock (Draw)
        if(computerInput == "rock") 
        {
           gameString = `Round ${roundNum}: Draw. Both picked Rock`;
        }
        
        // if computer picks paper (Loss)
        else if(computerInput == "paper")
        {
            gameString = `Round ${roundNum}: Player Loss. ${computerInput} (computer) beats ${playerInput} (player)`;
            computerScore++;
        }

        // if computer picks scissors (Win)
        else 
        {
            gameString = `Round ${roundNum}: Player Win. ${playerInput} (player) beats ${computerInput} (computer)`;
            playerScore++;
        }
            
    }

    // If player picks paper
    else if(playerInput == 'paper')
    {
        // if computer picks rock (Win)
        if(computerInput == "rock")
        {
            gameString = `Round ${roundNum}: Player Win. ${playerInput} (player) beats ${computerInput} (computer)`;
            playerScore++;
        }

        // if computer picks paper (Draw)
        else if(computerInput == "paper")
        {
            gameString = `Round ${roundNum}: Draw. Both picked Paper`;
        }

        // if computer picks scissors (Loss)
        else 
        {
            gameString = `Round ${roundNum}: Player Loss. ${computerInput} (computer) beats ${playerInput} (player)`;
            computerScore++;
        }

    }
    
    // If player picks scissors
    else
    {
        // if computer picks rock (Loss)
        if(computerInput == "rock")
        {
            gameString = `Round ${roundNum}: Player Loss. ${computerInput} (computer) beats ${playerInput} (player)`;
            computerScore++;
        }

        // if computer picks paper (Win)
        else if(computerInput == "paper")
        {
            gameString = `Round ${roundNum}: Player Win. ${playerInput} (player) beats ${computerInput} (computer)`;
            playerScore++;

        }

        // if computer picks scissors (Draw)
        else 
        {
           gameString = `Round ${roundNum}: Draw. Both picked Scissors`;
        }
        
    }

    // Increment Round Number
    roundNum++;
    
    // Update Game Log
    console.log(gameString);
    updateGameLog(gameString);

    // Update Scoreboard
    updateScoreBoardText();

}

function generateComputerPick()
{
    let num = Math.floor(Math.random() * 3)
    let pick = "";
    switch(num)
    {
        case 0: 
            pick = "rock";
            break;
        case 1: 
            pick = "paper";
            break;
        case 2: 
            pick = "scissors";
            break;
        default: 
            pick = "rock";
    }

    return pick;
}

function startGame()
{
    updateScoreBoardText();
}

startGame();