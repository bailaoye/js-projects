let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// My code:
function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
  let humanGuessDist = Math.abs(targetNumber - humanGuess);
  let computerGuessDist = Math.abs(targetNumber - computerGuess);
  if (humanGuessDist < computerGuessDist) {
    return true;
  }
  else if (humanGuessDist === computerGuessDist) {
    return true;
  }
  else {
    return false;
  }
} 

function updateScore(winner) {
  switch(winner) {
    case 'human':
      humanScore++;
    case 'computer':
      computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}