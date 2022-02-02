"use strict";
const enemyImg = document.querySelector(".enemy__img");
const __enemy = document.querySelector(".enemy__block");
const hpEnemy = document.querySelector(".enemy__hp");
const winMusic = new Audio("./audio3/win.mp3");
const playerHp = document.querySelector(".player__hp");
let hpPl = 300;

const enemy = {
  hp: 300,
  url: "./img3/enemy.png",
};
hpEnemy.style.width = `${enemy.hp}px`;
playerHp.style.width = `${hpPl}px`;

const overMusic = new Audio("./audio3/over.wav");

const random = (myMin, myMax) => {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
};
const onOver = () => {
  overMusic.play();
  document.querySelector(".player__block").style.display = "none";
  myMusic.pause();
  window.location.reload();
};

const attackToPlayer = () => {
  setTimeout(() => {
    hpPl -= random(15, 19);
  }, 1000);
  playerHp.style.width = `${hpPl}px`;
  if (hpPl < 0) {
    main__enemy.removeEventListener("click", onPlayerClick);
    onOver();
  }
};
