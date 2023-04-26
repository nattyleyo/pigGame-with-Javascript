"use strict";
const player1 = document.querySelector(".playerDiv1");
const player2 = document.querySelector(".playerDiv2");
const image = document.querySelector(".image");
const dice_img = document.querySelector(".dice_img");

const dice = document.querySelector(".dice");

let totalPoint1 = document.querySelector(".totalPoint1");
let totalPoint2 = document.querySelector(".totalPoint2");
let currentScore1 = document.querySelector(".currentScore1");
let currentScore2 = document.querySelector(".currentScore2");
const reset = document.querySelector(".reset");
cons roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");

let rand, total;
let score;
let active = 1;
roll.addEventListener("click", function () {
  rand = Math.trunc(Math.random() * 6) + 1;
  console.log(rand);
  dice_img.classList.add("hidden");
  dice.src = `dice-${rand}.png`;
  dice.classList.remove("hidden");

  if (rand != 1) {
    score += rand;
    document.querySelector(`.currentScore${active}`).textContent = score;
  } else {
    document.querySelector(`.currentScore${active}`).textContent = 0;
    active = active === 1 ? 2 : 1;
    score = 0;
    document.querySelector(`.playerDiv${3 - active}`).classList.add("divBg");
    document.querySelector(`.playerDiv${active}`).classList.remove("divBg");
  }
});
hold.addEventListener("click", function () {
  totalPoint1.textContent =
    Number(totalPoint1.textContent) + Number(currentScore1.textContent);
});
