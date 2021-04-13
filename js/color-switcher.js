const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  startBtn.disabled = false;
});
