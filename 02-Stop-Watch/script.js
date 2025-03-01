// Initialize time variables
let hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0;

// Variable to store the timer interval
let timer;

// Boolean to track stopwatch state (running or paused)
let running = false;

// Get references to the display elements
const displayHours = document.getElementById("hours");

const displayMinutes = document.getElementById("minutes");

const displaySeconds = document.getElementById("seconds");

const displayMilliseconds = document.getElementById("milliseconds");

// Get references to the control buttons
const startStopButton = document.getElementById("startStop");

const lapButton = document.getElementById("lap");

const resetButton = document.getElementById("reset");

// Get reference to the laps list
const lapsList = document.getElementById("laps");

// Function to start/stop the stopwatch
startStopButton.addEventListener("click", () => {
  if (!running) {
    running = true; // Start the stopwatch

    startStopButton.textContent = "Pause"; // Change button text to "Pause"

    startStopButton.classList.add("running"); // Add running state class

    timer = setInterval(updateTime, 10); // Update time every 10 milliseconds
  } else {
    running = false; // Pause the stopwatch

    startStopButton.textContent = "Start"; // Change button text to "Start"

    startStopButton.classList.remove("running"); // Remove running state class

    clearInterval(timer); // Stop the timer
  }
});

// Function to update time
function updateTime() {
  milliseconds += 10; // Increment milliseconds by 10
  if (milliseconds >= 1000) {
    milliseconds = 0; // Reset milliseconds

    seconds++; // Increment seconds
  }
  if (seconds >= 60) {
    seconds = 0; // Reset seconds
    minutes++; // Increment minutes
  }
  if (minutes >= 60) {
    minutes = 0; // Reset minutes
    hours++; // Increment hours
  }

  // Update the display with formatted time values
  displayHours.textContent = formatTime(hours);

  displayMinutes.textContent = formatTime(minutes);

  displaySeconds.textContent = formatTime(seconds);

  displayMilliseconds.textContent = formatMilliseconds(milliseconds);
}

// Function to format time values (add leading zero if needed)
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Function to format milliseconds (ensure two digits)
function formatMilliseconds(time) {
  return time < 100 ? `0${time}` : time;
}

// Function to record lap times
lapButton.addEventListener("click", () => {
  if (running) {
    // Create a formatted lap time string
    const lapTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
      seconds
    )}:${formatMilliseconds(milliseconds)}`;

    // Create a new list item element for the lap time
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;

    lapsList.appendChild(lapItem); // Append the lap time to the list
  }
});

// Function to reset stopwatch
resetButton.addEventListener("click", () => {
  running = false; // Stop the stopwatch
  clearInterval(timer); // Clear the timer interval

  // Reset all time variables
  hours = minutes = seconds = milliseconds = 0;

  // Reset the display to "00:00:00:00"
  displayHours.textContent = "00";
  displayMinutes.textContent = "00";
  displaySeconds.textContent = "00";
  displayMilliseconds.textContent = "00";

  // Reset the start button text and remove running state
  startStopButton.textContent = "Start";
  startStopButton.classList.remove("running");

  // Clear the lap times list
  lapsList.innerHTML = "";
});
