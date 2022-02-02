"use strict";
let __win__end = document.querySelector(".win__end");

document.addEventListener("click", (e) => {
  player__bl.style.left = e.x - 200 + "px";
  player__bl.style.top = e.y - 100 + "px";
});

const onTextWin = () => {
  __win__end.style.display = "block";
  myMusic.pause();
  setTimeout(() => {
    window.location = "testGAME.html";
  }, 3000);
};
const onWin = () => {
  document.body.removeEventListener("click", onPlayerClick);
  enemyImg.style.display = "none";
  hpEnemy.style.display = "none";
  winMusic.play();
  onTextWin();
};

const onEnemy = () => {
  const enemyMusic = new Audio("./audio3/arbalet.mp3");
  enemyMusic.play();
  myMusic.volume = 0.2;
  enemyMusic.volume = 1;
  enemyImg.classList.toggle("active");
  enemy.hp -= 15;
  hpEnemy.style.width = `${enemy.hp}px`;
  if (enemy.hp < 0) {
    onWin();
  }
};

console.log(enemyImg);
const onPlayerClick = () => {
  playerMain.subscribe(onEnemy());
  playerMain.subscribe(attackToPlayer());
};
main__enemy.addEventListener("click", onPlayerClick);
