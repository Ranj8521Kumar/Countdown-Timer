const userInput = document.getElementById("input-value");

let newYear;

function getValue() {
  newYear = new Date(userInput.value);
  document.getElementsByClassName(
    "container"
  )[0].innerHTML = `<div class="countdown-el days-container">
    <p class="big-text" id="days">0</p>
    <span>days</span>
  </div>

  <div class="countdown-el hours-container">
    <p class="big-text" id="hours">0</p>
    <span>Hours</span>
  </div>

  <div class="countdown-el minutes-container">
    <p class="big-text" id="minutes">0</p>
    <span>Minutes</span>
  </div>

  <div class="countdown-el seconds-container">
    <p class="big-text" id="seconds">0</p>
    <span>Seconds</span>
  </div>`;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  countDown();
  setInterval(countDown, 1000);
}
