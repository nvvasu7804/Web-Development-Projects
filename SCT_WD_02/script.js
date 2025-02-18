let hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0;

let timer;

let running = false;

const displayHours = document.getElementById("hours");

const displayMinutes = document.getElementById("minutes");

const displaySeconds = document.getElementById("seconds");

const displayMilliseconds = document.getElementById("milliseconds");

const startStopButton = document.getElementById("startStop");

const lapButton = document.getElementById("lap");

const resetButton = document.getElementById("reset");

const lapsList = document.getElementById("laps");

startStopButton.addEventListener("click", () => {
  if (!running) {
    running = true;
    startStopButton.textContent = "Pause";
    startStopButton.classList.add("running");
    timer = setInterval(updateTime, 10);
  } else {
    running = false;
    startStopButton.textContent = "Start";
    startStopButton.classList.remove("running");
    clearInterval(timer);
  }
});

function updateTime() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  displayHours.textContent = formatTime(hours);

  displayMinutes.textContent = formatTime(minutes);

  displaySeconds.textContent = formatTime(seconds);

  displayMilliseconds.textContent = formatMilliseconds(milliseconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `0${time}` : time;
}

lapButton.addEventListener("click", () => {
  if (running) {
    const lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
      seconds
    )}:${formatMilliseconds(milliseconds)}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;
    lapsList.appendChild(lapItem);
  }
});

resetButton.addEventListener("click", () => {
  running = false;
  clearInterval(timer);
  hours = minutes = seconds = milliseconds = 0;
  displayHours.textContent = "00";
  displayMinutes.textContent = "00";
  displaySeconds.textContent = "00";
  displayMilliseconds.textContent = "00";
  startStopButton.textContent = "Start";
  startStopButton.classList.remove("running");
  lapsList.innerHTML = "";
});
