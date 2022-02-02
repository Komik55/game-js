"use strict";

let next1 = document.querySelector(".next");
let next2 = document.querySelector(".next2");
let backSong = document.getElementById("song1");
let backSong2 = document.getElementById("song2");
let backSong3 = document.getElementById("song3");
let enemysong = new Audio("audio/knife_stab.mp3");
let sword = document.querySelector(".sword");
let bombb = document.querySelector(".bombp");
let btoomp = document.querySelector(".btoomp");
let btoomSong = new Audio("audio/btoom.mp3");
let healSong = new Audio("audio/heall.mp3");
let heropoint = document.querySelector(".heropoint");
let damageSong = new Audio("audio/damage1.mp3");

let enemy = document.querySelector(".enemy1");
let enemypoint = document.querySelector(".enemypoint");

let enemy2 = document.querySelector(".enemy2");
let enemypoint2 = document.querySelector(".enemypoint2");

let objenemy1 = {
  healpoin: 20,
};

let objenemy2 = {
  healpoin: 20,
};

let heroDmg = () => {
  heropoint.healpoin = objhero.healpoin -= 1;
  damageSong.play();
  heropoint.style.width = objhero.healpoin + "vw";
};
