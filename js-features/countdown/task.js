// const timerValue = document.getElementById('timer');
// let time = Number(timerValue.textContent);
// let intervalId = setInterval(() => {
//   time--;
//   timerValue.textContent = time;

//   if (time === 0) {
//     clearInterval(intervalId);
//     alert('Вы победили в конкурсе!')
//   }
// }, 1000)

const timerValue = document.getElementById('timer');
let [hours, minutes, seconds] = timerValue.textContent.split(':').map(Number);

let intervalId = setInterval(() => {
  if (seconds === 0 && minutes === 0) {
    hours--;
    minutes = 59;
    seconds = 60;
  }
  if (seconds === 0) {
    minutes--;
    seconds = 60;
  }
  seconds--;

  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!')
  }

  timerValue.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}, 1000)







