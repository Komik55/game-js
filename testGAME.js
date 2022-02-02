"use strict";

let playBoom = () => {
  bombb.style.display = "none";
  btoomp.style.display = "none";
};
let playBoomZ = () => {
  bombb.style.display = "block";
  btoomp.style.display = "block";
};

document.addEventListener("mousemove", (event) => {
  sword.style.left = event.x - 30 + "px";
  sword.style.top = event.y + 1 + "px";
});
document.addEventListener("keydown", (event) => {
  if (event.code === "KeyZ") {
    healSong.play();
    objhero.healpoin = objhero.healpoin += 6;
    heropoint.style.width = objhero.healpoin + "vw";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "KeyX") {
    objenemy1.healpoin = objenemy1.healpoin -= 8;
    enemypoint.style.width = objenemy1.healpoin + "vw";
    playBoomZ();
    btoomSong.play();
    setTimeout(playBoom, 1500);
  }
  if (event.code === "KeyC") {
    objenemy2.healpoin = objenemy2.healpoin -= 8;
    enemypoint2.style.width = objenemy2.healpoin + "vw";
    playBoomZ();
    btoomSong.play();
    setTimeout(playBoom, 1500);
  }
  if (event.code === "KeyV") {
    objenemy3.healpoin = objenemy3.healpoin -= 8;
    enemypoint3.style.width = objenemy3.healpoin + "vw";
    playBoomZ();
    btoomSong.play();
    setTimeout(playBoom, 1500);
  }
});

class PlayerObserver {
  constructor() {
    this.observers = [];
  }
  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  broadcast(data) {
    this.observers.forEach((subscriber) => subscriber(data));
  }
}

let playGo = new PlayerObserver();

const onPlayerClick1 = () => {
  playGo.subscribe(enemyOne());
  playGo.subscribe(setTimeout(heroDmg, 2000));
};
const onPlayerClick2 = () => {
  playGo.subscribe(enemyTwo());
  playGo.subscribe(setTimeout(heroDmg, 2000));
};

enemy.addEventListener("click", onPlayerClick1);
enemy2.addEventListener("click", onPlayerClick2);
