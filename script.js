/**
 * Produces random number interval [0,(num-1)]
 * */
const randomNumberGenerator = (num) => Math.floor(Math.random() * num);

/**
 * Given num which is [0,2]
 * returns
 *   "rock"     for 0
 *   "paper"    for 1
 *   "scissors" for 2
 * */
const getComputerChoice = (num) =>
  num === 0 ? "rock" : num === 1 ? "paper" : "scissors";

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
