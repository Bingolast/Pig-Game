"use strict";
//selecting elements
const score0EL = document.getElementById("score--0");
const score1EL = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0EL.textContent = "0";
score1EL.textContent = "0";
diceEL.classList.add("hidden");

//Roll the dice
btnRoll.addEventListener("click", function () {
  //1. Roll the random dice number
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.Display the correct dice
  diceEL.classList.remove("hidden");
  diceEL.src = `dice-${dice}.png`;

  //2.check for dice roll to 1 or not
});
