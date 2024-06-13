let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(time) {
    const date = new Date(time);
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0').substring(0, 2);
    return `${minutes}:${seconds}:${milliseconds}`;
}

function startStopwatch() {
    const startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }, 10);
}

function stopStopwatch() {
    clearInterval(timer);
}

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        stopStopwatch();
        startStopBtn.textContent = 'Start';
    } else {
        startStopwatch();
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    stopStopwatch();
    elapsedTime = 0;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    isRunning = false;
});
