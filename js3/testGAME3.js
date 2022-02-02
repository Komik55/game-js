"use strict";
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
const playerMain = new PlayerObserver();
const myMusic = new Audio("./audio3/main.mp3");
myMusic.volume = 1;
const onPlayBody = () => {
  myMusic.play();
  if (hpEnemy.style.width <= "0px" || playerHp.style.width <= "0px") {
    myMusic.pause();
  }
};
document.body.addEventListener("click", onPlayBody);
