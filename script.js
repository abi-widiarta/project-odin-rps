const title = document.querySelector(".title-wrapper__title");
const playerScore = document.querySelector(".score-wrapper__player span");
const computerScore = document.querySelector(".score-wrapper__computer span");
const choices = document.querySelectorAll(".player-choice");
const scorePlayerChoice = document.querySelector(".score-wrapper__player h1");
const scoreComputerChoice = document.querySelector(".score-wrapper__computer h1");

let playerPoint = 0;
let compPoint = 0;

const getPlayerChoice = (e) => {
  return e;
};

const getComputerChoice = () => {
  let finalComputerChoice = null;
  const num = Math.ceil(Math.random() * 3);
  switch (num) {
    case 1:
      finalComputerChoice = "✊";
      break;
    case 2:
      finalComputerChoice = "✋";
      break;
    case 3:
      finalComputerChoice = "✌";
      break;
  }

  scoreComputerChoice.textContent = finalComputerChoice;
  return finalComputerChoice;
};

const updateScore = () => {
  playerScore.textContent = playerPoint;
  computerScore.textContent = compPoint;
};

const playRound = (compChoice, playerChoice) => {
  let result = null;
  if ((playerChoice == "✊" && compChoice == "✌") || (playerChoice == "✋" && compChoice == "✊") || (playerChoice == "✌" && compChoice == "✋")) {
    playerPoint++;
    result = "Player Win";
  } else if ((compChoice == "✊" && playerChoice == "✌") || (compChoice == "✋" && playerChoice == "✊") || (compChoice == "✌" && playerChoice == "✋")) {
    compPoint++;
    result = "Comp Win";
  } else {
    result = "Tie";
  }
  updateScore(playerPoint, compPoint);
  return result;
};

const game = (element) => {
  let playerChoice = element.textContent;
  let computerChoice = getComputerChoice();
  title.textContent = playRound(computerChoice, playerChoice);
  checkWin();
};

const checkWin = () => {
  if (compPoint == 5) {
    title.textContent = "COMPUTER WIN!!!";
    compPoint = 0;
    playerPoint = 0;
  } else if (playerPoint == 5) {
    title.textContent = "PLAYER WIN!!!";
    compPoint = 0;
    playerPoint = 0;
  }
};

choices.forEach((element) => {
  element.addEventListener("click", () => {
    scorePlayerChoice.textContent = element.textContent;
    game(element);
  });
});

updateScore();
