"use strict";

let tboom = document.getElementById("tbom");

let objhero = {
  healpoin: 20,
};

const reload = () => {
  location.reload();
};
let win = document.querySelector(".win");

let toWin = () => {
  window.location = "testGAME3.html";
};

let enemyOne = () => {
  backSong.play();
  enemysong.play();
  objenemy1.healpoin = objenemy1.healpoin -= 2;
  enemypoint.style.width = objenemy1.healpoin + "vw";
  if (objenemy1.healpoin === 0) {
    enemy.style.display = "none";
    enemypoint.style.display = "none";
    enemy2.style.display = "block";
    enemypoint2.style.display = "block";
    document.body.style.backgroundImage = "url(images/loc2.jpg)";
    backSong.pause();
    backSong2.play();
    tboom.textContent = "C";
  }
};

let enemyTwo = () => {
  backSong2.play();
  enemysong.play();
  objenemy2.healpoin = objenemy2.healpoin -= 2;
  enemypoint2.style.width = objenemy2.healpoin + "vw";
  if (objenemy2.healpoin === 0) {
    window.location = "testGAME3.html";
  }
};
