let compPoint = 0;
let playerPoint = 0;

const getComputerChoice = () => {
  let finalComputerChoice = null;
  const num = Math.ceil(Math.random() * 3);
  switch (num) {
    case 1:
      finalComputerChoice = "rock";
      break;
    case 2:
      finalComputerChoice = "paper";
      break;
    case 3:
      finalComputerChoice = "scissor";
      break;
  }

  return finalComputerChoice;
};

const getPlayerChoice = () => {
  console.log("tes");
  let playerChoice = prompt("Input Your Choices");
  if (playerChoice != null) {
    return playerChoice;
  } else {
    setTimeout(getPlayerChoice, 0);
  }
};

const playRound = (compChoice, playerChoice) => {
  let result = null;
  if ((playerChoice == "rock" && compChoice == "scissor") || (playerChoice == "paper" && compChoice == "rock") || (playerChoice == "scissor" && compChoice == "paper")) {
    playerPoint++;
    result = "Player Win";
  } else if ((compChoice == "rock" && playerChoice == "scissor") || (compChoice == "paper" && playerChoice == "rock") || (compChoice == "scissor" && playerChoice == "paper")) {
    compPoint++;
    result = "Comp Win";
  } else {
    result = "Tie";
  }
  console.log(`Player Choice : ${playerChoice}`);
  console.log(`Computer Choice : ${compChoice}`);
  console.log(`Player Point : ${playerPoint}`);
  console.log(`Computer Point : ${compPoint}`);

  return result;
};

const game = () => {
  let computerChoice = getComputerChoice();
  let playerChoice = "rock";
  console.log(compPoint);
  console.log(playRound(computerChoice, playerChoice));
  console.log("");
  checkWin();
};

const checkWin = () => {
  if (compPoint == 5) {
    console.log("Final comp Win");
    return;
  } else if (playerPoint == 5) {
    console.log("Final player Win");
    return;
  }

  game();
};

game();
