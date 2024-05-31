const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter')
const clickerSpeed = document.getElementById('clicker__speed')
let previousTime = new Date().getTime();

let speed = 0;
let sumOfClicks = 0;
cookie.onclick = function() {
  sumOfClicks++;
  clickerCounter.textContent = sumOfClicks;

  if (sumOfClicks % 2 === 1) {
    cookie.width = 250;
  } else {
    cookie.width = 200;
  }

  let currentTime = new Date().getTime();
  let timeDifference = (currentTime - previousTime) / 1000;
  speed = 1 / (timeDifference);
  clickerSpeed.textContent = speed.toFixed(2);
  previousTime = currentTime;
}