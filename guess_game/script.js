let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const getAbsoluteDistance = (number1, number2) => {
  return Math.pow(number1 - number2, 2);
};

const compareGuesses = (human, computer, target) => {
  if (
    getAbsoluteDistance(human, target) <= getAbsoluteDistance(computer, target)
  ) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore + 1;
  }
  if (winner === "computer") {
    computerScore + 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};
