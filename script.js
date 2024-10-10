/*
 * Produces random number interval [0,(num-1)]
 * */
const randomNumberGenerator = (num) => Math.floor(Math.random() * num);

/*
 * Given num which is [0,2]
 * returns
 *   "rock"     for 0
 *   "paper"    for 1
 *   "scissors" for 2
 * */
const getComputerChoice = (num) =>
  num === 0 ? "rock" : num === 1 ? "paper" : "scissors";
