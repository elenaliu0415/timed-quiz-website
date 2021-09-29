// WHEN the page loads:

// The following elements are shown:
// - high scores link
// - timer at 0
// - title
// - welcome message
// - start button

// WHEN the user clicks start

// - Hide/remove title, welcome message, and start button

// - Display question: What keyword can be used to print the type of a value?

// - display buttons with the following text below the question:
//   - A true
//   - B string
//   - C typeof
//   - D function

// - Start countdown: display "Time: 120" to start.
// - Update the time display each second counting down.

// WHEN the user clicks a button
// IF the user clicked "C typeof" button

// IF the user clicked "A true", "B string", or "D function"

// WHEN the time remaining reaches 0 or less

var timerElement = document.querySelector(".seconds-left");
var startButton = document.querySelector(".start-button");
var quizBox = document.querySelector(".quiz-box");
var header = document.querySelector("#header");
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector("#initials");

var timer;
var secondsLeft;
var finalScoreValue;


function startTimer() {
  timer = setInterval(function () {
    timerElement.textContent = secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timer);
    } else {
      secondsLeft--;
    }
  }, 1000);
}

function startQuiz() {
  secondsLeft = 120;
  startTimer();
  header.classList.add("hidden-content");
  quizBox.classList.remove("hidden-content");
}

function saveAnswer(answer) {
  var is_correct = answer.hasAttribute("correct");
  var question = answer.parentElement;
  var next_question = question.nextElementSibling;
  
  if(is_correct) {
    next_question.querySelector(".answer-result").textContent = "Correct";
  } else {
    secondsLeft -= 10;
    next_question.querySelector(".answer-result").textContent = "Wrong";
  }
  // Hide current question
  question.classList.add("hidden-content");
  // Show next question
  next_question.classList.remove("hidden-content");
  // Set final score
  finalScoreValue = secondsLeft;
  finalScore.textContent = "Your Final Score is: " + secondsLeft;
}

function submitScore() {
  var highscores;
  var score = "";
  if(localStorage.getItem("highscores") == null) {
    localStorage.setItem("highscores", JSON.stringify([]));
  }

  highscores = JSON.parse(localStorage.getItem("highscores"));
  // highscore = highscores.length + 1;
  score = initials.value + " - " + finalScoreValue;
  highscores.push(score);
  localStorage.setItem("highscores", JSON.stringify(highscores));
  // redirect to highscores page
  window.location.href = "highscore.html";
}

startButton.addEventListener("click", startQuiz);
