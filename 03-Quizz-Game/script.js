const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Rome", correct: false },
      { text: "Berlin", correct: false },
    ],
  },
  {
    question: "Which of these is a programming language?",
    answers: [
      { text: "HTML", correct: false },
      { text: "Python", correct: true },
      { text: "CSS", correct: false },
      { text: "SQL", correct: false },
    ],
  },
  {
    question: "Fill in the blank: JavaScript is a ______ language.",
    answers: [
      { text: "Markup", correct: false },
      { text: "Programming", correct: true },
      { text: "Styling", correct: false },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.classList.add("hidden");
  nextButton.style.display = "none";
  submitButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("option-btn");
    button.addEventListener("click", () =>
      selectAnswer(button, answer.correct)
    );
    answerButtons.appendChild(button);
  });

  submitButton.style.display = "block";
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(button, isCorrect) {
  document
    .querySelectorAll(".option-btn")
    .forEach((btn) => btn.classList.remove("selected"));
  button.classList.add("selected");
  button.dataset.correct = isCorrect;
}

submitButton.addEventListener("click", () => {
  const selectedButton = document.querySelector(".selected");
  if (selectedButton) {
    if (selectedButton.dataset.correct === "true") {
      score++;
    }
    nextButton.style.display = "block";
    submitButton.style.display = "none";
  }
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  resetState();
  questionText.textContent = "Quiz Completed!";
  resultContainer.classList.remove("hidden");
  scoreText.textContent = `${score} / ${questions.length}`;
  nextButton.style.display = "none";
  submitButton.style.display = "none";
}

restartButton.addEventListener("click", startQuiz);

startQuiz();
