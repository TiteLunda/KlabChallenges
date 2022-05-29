let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
    return Math.floor(Math.random()*10);
}

function compareGuesses(humanNum,computerNum,target)
{
    let CompGuess=Math.abs(target-computerNum);
    let HumanGuess=Math.abs(target-humanNum);

    if (humanNum>9 || humanNum<0)
        alert('Please enter a number between 0 and 9.');
      
    if (HumanGuess<=CompGuess)
        return true;
    else
        return false;
    
} 

function updateScore(winner){
    if (winner==='human')
        humanScore++;
    else if (winner==='computer')
        computerScore++;
}

function advanceRound(){
    currentRoundNumber++;
}