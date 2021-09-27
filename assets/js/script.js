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

var timerElement = document.querySelector('.seconds-left');
var startButton = document.querySelector('.start-button');


var timer;
var secondsLeft;


startButton.addEventListener('click', startQuiz);

function startTimer() {

  timer = setInterval(function () {
    
    timerElement.textContent = secondsLeft;

    if (secondsLeft > 0) {
        secondsLeft--;
    } else {
        clearInterval(secondsLeft);
    }
  }, 1000);
}

function startQuiz() {
    secondsLeft = 120;
    startTimer();
  }

startButton.addEventListener('click', startQuiz);