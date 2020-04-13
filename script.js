var timeEl = document.querySelector(".timer");
var startButton = document.getElementById("start-btn");
var quizStart = document.getElementById("quiz-start")
var questionContainer = document.getElementById("question-container");

startButton.addEventListener('click', startQuiz)

var secondsLeft = 75;

//function to start quiz
function startQuiz(){
    quizStart.classList.add('hide')
    questionContainer.classList.remove('hide')
}

//function to set the next question
function nextQuestion (){

}

//function for selecting an answer
function selectAnswer(){

}