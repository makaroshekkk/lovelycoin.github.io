let score = 0;
let timeLeft = 30;
let timerInterval;

const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

clickButton.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
});

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert(`Игра окончена! Ваш счёт: ${score}`);
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
}

startTimer();
