"use strict";
const __arsenal = document.querySelector(".arsenal__block");
document.onkeyup = (e) => {
  if (e.code === "CapsLock") {
    e.preventDefault();
    __arsenal.classList.toggle("arsenal_active");
  }
};

const onChangeWeapon = (e) => {
  switch (e.target.id) {
    case "sword__img": {
      player__img.src = "./img3/sword.png";
      break;
    }
    case "arbalest__img": {
      player__img.src = "./img3/arbalet.png";
      break;
    }
    case "plus__img": {
      return (playerHp.style.width = "300px");
    }
    default:
      return null;
  }
};
__arsenal.addEventListener("click", onChangeWeapon);
