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
    finalScoreValue = secondsLeft;
    finalScore.textContent = "Your Final Score is: " + secondsLeft;
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
  var isCorrect = answer.hasAttribute("correct");
  var question = answer.parentElement;
  var nextQuestion = question.nextElementSibling;
  
  if(isCorrect) {
    nextQuestion.querySelector(".answer-result").textContent = "Correct";
  } else {
    secondsLeft -= 10;
    nextQuestion.querySelector(".answer-result").textContent = "Wrong";
  }
  // Hide current question
  question.classList.add("hidden-content");
  // Show next question
  nextQuestion.classList.remove("hidden-content");
  // Check for final score
  if(nextQuestion.getAttribute("id") == "form") {
    clearInterval(timer);
  }
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
