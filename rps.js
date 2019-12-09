const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
    return userInput;
  }
  else {
    console.log("Invalid entry");
  }
}

const getComputerChoice = () => {
  let rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0 :
      return 'paper';
      break;
    case 1 :
      return 'scissor';
      break;
    case 2 :
      return 'rock';
      break;
    default:
      return 'invalid: outOfRange';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie.";
  }
  else if (userChoice === 'bomb') {
    return "The user wins.";
  }
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "The computer wins.";
    }
    else {
      return "The user wins.";
    }
  }
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "The computer wins.";
    }
    else {
      return "The user wins.";
    }
  }
  else if (userChoice === 'scissors') {
    if (computerChouce === 'rock') {
      return "The computer wins.";
    }
    else {
      return "The user wins."
    }
  }
}

function playGame() {
  userChoice = getUserChoice('bomb');
  computerChoice = getComputerChoice();
  console.log("User choice: " + userChoice + ", Computer choice: " + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame();