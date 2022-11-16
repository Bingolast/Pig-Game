"use strict";
//selecting elements
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

let scores = [0, 0];
let currentScore = 0;
let activeScore = 0;
//Roll the dice
btnRoll.addEventListener("click", function () {
  //1. Roll the random dice number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.Display the correct dice
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;

  //3.check for dice roll to 1 or not
  if (dice != 1) {
    //Add current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //Switch Player
    document.querySelector(".player--1").classList.add("player--active");
    document.querySelector(".player--0").classList.remove("player--active");
  }
});
