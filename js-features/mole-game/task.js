let deathNumber = document.getElementById('dead');
let missNumber = document.getElementById('lost');

let deathCounter = 0;
let missCounter = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

for(let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    if (getHole(i).classList.contains('hole_has-mole')) {
      deathCounter++;
    } else {
      missCounter++;
    }

    if (deathCounter === 10) {
      alert('Вы победили!');
      deathCounter = 0;
      missCounter = 0;
    } else if (missCounter === 5) {
      alert('Вы проиграли!');
      deathCounter = 0;
      missCounter = 0;
    }

    deathNumber.textContent = deathCounter;
    missNumber.textContent = missCounter;
  }
}