let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let resetTime = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);

function startStop() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        startStopButton.innerHTML = "Stop";
        running = true;
        resetTime = false;
    } else {
        clearInterval(tInterval);
        startStopButton.innerHTML = "Start";
        running = false;
    }
}

function reset() {
    clearInterval(tInterval);
    resetTime = true;
    running = false;
    display.innerHTML = "00:00:00";
    startStopButton.innerHTML = "Start";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    if (!resetTime) {
        display.innerHTML = hours + ':' + minutes + ':' + seconds;
    }
}
