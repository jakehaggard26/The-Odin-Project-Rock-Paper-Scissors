let playerScore = 0;
let computerScore = 0;
let roundNum = 0;

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => updateGame("rock"));

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => updateGame("paper"));

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => updateGame("scissors"));

function updateScoreBoardText() {
    const round = document.querySelector("#round");
    round.textContent = `Round ${roundNum}`
    
    const score = document.querySelector("#score");
    score.textContent = `Your Score: ${playerScore} vs Computer Score ${computerScore}`;
}

function resetGame()
{
    humanScore = 0;
    computerScore = 0;
    roundNum = 1;
}

function updateGame(playerInput) {

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
            console.log(`Round ${roundNum}: Draw. Both picked Rock`);
        }
        
        // if computer picks paper (Loss)
        else if(computerInput == "paper")
        {
            console.log(`Round ${roundNum}: Player Loss. Paper (computer) beats Rock (player)`);
            computerScore++;
        }

        // if computer picks scissors (Win)
        else 
        {
            console.log(`Round ${roundNum}: Player Win. Rock (computer) beats Scissors (player)`);
            playerScore++;
        }
            
    }

    // If player picks paper
    else if(playerInput == 'paper')
    {
        // if computer picks rock (Win)
        if(computerInput == "rock")
        {
            console.log(`Round ${roundNum}: Player Win. Paper (player) beats paper (computer)`);
            playerScore++;
        }

        // if computer picks paper (Draw)
        else if(computerInput == "paper")
        {
            console.log(`Round ${roundNum}: Draw. Both picked Paper`)
        }

        // if computer picks scissors (Loss)
        else 
        {
            console.log(`Round ${roundNum}: Scissors (computer) beats Paper (player)`)
            computerScore++;
        }

    }
    
    // If player picks scissors
    else
    {
        // if computer picks rock (Loss)

        // if computer picks paper (Win)

        // if computer picks scissors (Draw)
        
    }

    // Increment Round Number
    roundNum++;
    
    // Update Scoreboard
    updateScoreBoardText();

    // Round Check (If max rounds reached, reset the game)
    // if(roundNum > 5)
    //{
        //resetGame();
    //}
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