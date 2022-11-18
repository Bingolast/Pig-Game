"use strict";
//selecting elements
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

score0EL.textContent = "0";
score1EL.textContent = "0";
diceEL.classList.add("hidden");
let playing = true;

function switchPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
}

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//Roll the dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    //1. Roll the random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.Display the correct dice
    diceEL.classList.remove("hidden");
    diceEL.src = `dice-${dice}.png`;

    //3.check for dice roll to 1 or not
    if (dice != 1) {
      //Add current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch Player
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  //add current score to the active player
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check score if score is 100, yes player wins the game.
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEL.classList.add("hidden");
    } else {
      //switch players
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  currentScore = 0;
  // document.querySelector(`#score--${activePlayer}`).textContent = 0;
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
  scores[activePlayer] = 0;
  playing = true;
  document.getElementById(`score--1`).textContent = scores[activePlayer];
  document.getElementById(`score--0`).textContent = scores[activePlayer];

  btnRoll();
});
