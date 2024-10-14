/**
 * Produces random number interval [0,(num-1)]
 * */
const randomNumberGenerator = (num) => Math.floor(Math.random() * num);

/**
 * Given num which is [0,2]
 * outcome =s
 *   "rock"     for 0
 *   "paper"    for 1
 *   "scissors" for 2
 * */
const getComputerChoice = () => {
  const num = randomNumberGenerator(3);
  return num === 0 ? "rock" : num === 1 ? "paper" : "scissors";
};

/**
 * Gets human choice for rock, paper, scissors.
 * Removes whitespace and lowercase given choice.
 * */
const getHumanChoice = () =>
  prompt("Enter rock, paper, or scissors").trim().toLowerCase();

/**
 * Check for valid human choice
 * */
const validateHumanChoice = (choice) =>
  choice === "rock" || choice === "paper" || choice === "scissors";

/**
 * Game Scores
 * */
let humanScore = 0;
let computerScore = 0;

/**
 * Game Logic
 * */
const playRound = (humanChoice, computerChoice) => {
  let outcome;
  if (humanChoice === computerChoice) outcome = "Tie!";
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    outcome = "You Lose! Paper beats Rock";
  }
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    outcome = "You Win! Rock beats Scissors";
  }
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    outcome = "You Win! Paper beats Rock";
  }
  if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    outcome = "You Lose! Scissors beats Paper";
  }
  if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    outcome = "You Lose! Rock beats Scissors";
  }
  if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    outcome = "You Win! Scissors beats Paper";
  }

  document.querySelector(".round-result").textContent = outcome;
  document.querySelector(".humanscore").textContent =
    "Your Score: " + humanScore;
  document.querySelector(".computerscore").textContent =
    "Computer Score: " + computerScore;
  if (humanScore === 5 || computerScore === 5) {
    document.querySelector("body").removeChild(rockBtn);
    document.querySelector("body").removeChild(paperBtn);
    document.querySelector("body").removeChild(scissorsBtn);

    if (humanScore > computerScore)
      document.querySelector(".round-result").textContent = "You WIN!!!";
    if (humanScore < computerScore)
      document.querySelector(".round-result").textContent = "You LOSE!!!";
  }
};

/**
 * UI
 * */
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
