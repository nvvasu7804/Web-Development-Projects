// Array of quiz questions, each containing a question and multiple answer options
const questions = [
  {
    question: "Who is the current Prime Minister of India (as of 2025)?",
    answers: [
      { text: "Rahul Gandhi", correct: false },
      { text: "Narendra Modi", correct: true },
      { text: "Arvind Kejriwal", correct: false },
      { text: "Amit Shah", correct: false },
    ],
  },
  {
    question: "Which Indian city is known as the 'Silicon Valley of India'?",
    answers: [
      { text: "Bangalore", correct: true },
      { text: "Hyderabad", correct: false },
      { text: "Pune", correct: false },
      { text: "Chennai", correct: false },
    ],
  },
  {
    question: "Who was the first President of independent India?",
    answers: [
      { text: "Sardar Vallabhbhai Patel", correct: false },
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Dr. Rajendra Prasad", correct: true },
      { text: "B. R. Ambedkar", correct: false },
    ],
  },
  {
    question: "Which of the following is the longest river in India?",
    answers: [
      { text: "Ganga", correct: true },
      { text: "Yamuna", correct: false },
      { text: "Brahmaputra", correct: false },
      { text: "Godavari", correct: false },
    ],
  },
  {
    question: "In which year did India launch its Chandrayaan-3 mission?",
    answers: [
      { text: "2019", correct: false },
      { text: "2021", correct: false },
      { text: "2023", correct: true },
      { text: "2025", correct: false },
    ],
  },
  {
    question: "Which Indian state has the highest population?",
    answers: [
      { text: "Maharashtra", correct: false },
      { text: "Uttar Pradesh", correct: true },
      { text: "Bihar", correct: false },
      { text: "West Bengal", correct: false },
    ],
  },
  {
    question:
      "Which city is home to the Indian Space Research Organisation (ISRO) headquarters?",
    answers: [
      { text: "Chennai", correct: false },
      { text: "Hyderabad", correct: false },
      { text: "New Delhi", correct: false },
      { text: "Bangalore", correct: true },
    ],
  },
  {
    question: "Which Indian festival is known as the 'Festival of Lights'?",
    answers: [
      { text: "Holi", correct: false },
      { text: "Diwali", correct: true },
      { text: "Navratri", correct: false },
      { text: "Dussehra", correct: false },
    ],
  },
  {
    question:
      "Which Indian state is famous for its tea plantations in Darjeeling?",
    answers: [
      { text: "West Bengal", correct: true },
      { text: "Assam", correct: false },
      { text: "Sikkim", correct: false },
      { text: "Himachal Pradesh", correct: false },
    ],
  },
  {
    question: "Who was the first Indian woman to go to space?",
    answers: [
      { text: "Sunita Williams", correct: false },
      { text: "Rakesh Sharma", correct: false },
      { text: "Indira Gandhi", correct: false },
      { text: "Kalpana Chawla", correct: true },
    ],
  },
  {
    question: "Which is the national animal of India?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Bengal Tiger", correct: true },
      { text: "Elephant", correct: false },
      { text: "Peacock", correct: false },
    ],
  },
  {
    question: "Which of these Indian cities is famous for its IT industry?",
    answers: [
      { text: "Jaipur", correct: false },
      { text: "Kolkata", correct: false },
      { text: "Hyderabad", correct: true },
      { text: "Bhopal", correct: false },
    ],
  },
  {
    question: "Which Indian state is known as 'God’s Own Country'?",
    answers: [
      { text: "Goa", correct: false },
      { text: "Tamil Nadu", correct: false },
      { text: "Karnataka", correct: false },
      { text: "Kerala", correct: true },
    ],
  },
  {
    question:
      "Which Indian cricketer has scored the most international centuries?",
    answers: [
      { text: "Virat Kohli", correct: false },
      { text: "MS Dhoni", correct: false },
      { text: "Sachin Tendulkar", correct: true },
      { text: "Rahul Dravid", correct: false },
    ],
  },
  {
    question: "Where is the Taj Mahal located?",
    answers: [
      { text: "Agra", correct: true },
      { text: "Delhi", correct: false },
      { text: "Jaipur", correct: false },
      { text: "Varanasi", correct: false },
    ],
  },
  {
    question: "What is the currency of India?",
    answers: [
      { text: "Dollar", correct: false },
      { text: "Rupee", correct: true },
      { text: "Euro", correct: false },
      { text: "Yen", correct: false },
    ],
  },
  {
    question:
      "Which Indian state is famous for the dance form 'Bharatanatyam'?",
    answers: [
      { text: "Tamil Nadu", correct: true },
      { text: "Odisha", correct: false },
      { text: "Kerala", correct: false },
      { text: "Karnataka", correct: false },
    ],
  },
  {
    question: "Which river is known as the 'Lifeline of India'?",
    answers: [
      { text: "Yamuna", correct: false },
      { text: "Brahmaputra", correct: false },
      { text: "Godavari", correct: false },
      { text: "Ganga", correct: true },
    ],
  },
  {
    question: "Who wrote the Indian national anthem 'Jana Gana Mana'?",
    answers: [
      { text: "Rabindranath Tagore", correct: true },
      { text: "Bankim Chandra Chattopadhyay", correct: false },
      { text: "Sarojini Naidu", correct: false },
      { text: "Subramania Bharati", correct: false },
    ],
  },
];

// Variables to track quiz progress
let currentQuestionIndex = 0; // Keeps track of the current question index
let score = 0; // Stores the user's score

// DOM elements
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

// Function to start the quiz
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  // Hides the result container at the start
  resultContainer.classList.add("hidden");
  // Hides the 'Next' button initially
  nextButton.style.display = "none";
  // Hides the 'Submit' button initially
  submitButton.style.display = "none";
  // Displays the first question
  showQuestion();
}

// Function to display the current question
function showQuestion() {
  // Clears previous question data
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  // Sets question text
  questionText.textContent = currentQuestion.question;

  // Creates answer buttons dynamically
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

// Function to reset the answer buttons before showing a new question
function resetState() {
  while (answerButtons.firstChild) {
    // Clears previous answer buttons and hide the 'Next' button
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Function to handle answer selection
function selectAnswer(button, isCorrect) {
  // Remove the 'selected' class from all option buttons
  document
    .querySelectorAll(".option-btn")
    .forEach((btn) => btn.classList.remove("selected"));

  // Add the 'selected' class to the clicked button
  button.classList.add("selected");

  // Store whether the selected answer is correct in the button's dataset
  button.dataset.correct = isCorrect;
}

// Event listener for the submit button
submitButton.addEventListener("click", () => {
  // Get the selected button
  const selectedButton = document.querySelector(".selected");
  if (selectedButton) {
    // Check if the selected answer is correct
    if (selectedButton.dataset.correct === "true") {
      score++; // Increase score if correct
    }

    // Show the "Next" button and hide the "Submit" button after selection
    nextButton.style.display = "block";
    submitButton.style.display = "none";
  }
});

// Event listener for the next button
nextButton.addEventListener("click", () => {
  // Move to the next question
  currentQuestionIndex++;

  // If there are more questions, show the next one
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    // If no more questions, end the quiz
    endQuiz();
  }
});

// Function to handle quiz completion
function endQuiz() {
  // Reset UI for quiz completion
  resetState();

  // Display final message and score
  questionText.textContent = "Quiz Completed!";
  resultContainer.classList.remove("hidden");
  scoreText.textContent = `${score} / ${questions.length}`;

  // Hide the next and submit buttons
  nextButton.style.display = "none";
  submitButton.style.display = "none";
}

// Event listener for the restart button to restart the quiz
restartButton.addEventListener("click", startQuiz);

// Start the quiz when the script runs
startQuiz();
