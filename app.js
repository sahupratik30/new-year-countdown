const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const newYear = document.getElementById("year");

const d = new Date();
const year = d.getFullYear() + 1;
newYear.innerText = year;
const newYearDate = new Date(`1 Jan ${year}`);
function countDown() {
  const currentDate = new Date();
  const totalSeconds = Math.floor((newYearDate - currentDate) / 1000);
  const daysLeft = Math.floor(totalSeconds / 3600 / 24);
  const hoursLeft = Math.floor(totalSeconds / 3600) % 24;
  const minutesLeft = Math.floor(totalSeconds / 60) % 60;
  const secondsLeft = Math.floor(totalSeconds) % 60;
  days.innerText = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
  hours.innerText = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
}
countDown();
setInterval(() => {
  countDown();
}, 1000);
