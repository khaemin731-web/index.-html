const questions = [
  "Are you ready? 😁",
  "Are you happy today? 😊",
  "Are you gay? 😹"
];

let current = 0;

const startBtn = document.getElementById("startBtn");
const content = document.getElementById("content");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMessage = document.getElementById("finalMessage");

startBtn.onclick = () => {
  startBtn.style.display = "none";
  content.style.display = "block";
  question.innerHTML = questions[current];
};

yesBtn.onclick = () => {
  current++;

  if (current < questions.length) {
    question.innerHTML = questions[current];
  } else {
    content.style.display = "none";
    finalMessage.style.display = "block";
  }
};

function moveButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", function(e) {
  e.preventDefault();
  moveButton();
});