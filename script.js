var timeEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var quizStart = document.getElementById("quiz-start")
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");

var secondsLeft = 75;

startButton.addEventListener('click', startQuiz);

//why does timer have small delay on page startup?

//function to start quiz
function startQuiz(){
    startTimer();
    quizStart.classList.add('hide');
    questionContainer.classList.remove('hide');
    
    
}

//function to set the next question
function nextQuestion (){
    
}

//function to show next question
function showNextQuestion(){
    q
}

//function for selecting an answer
function selectAnswer(){

}

//function to start timer
function startTimer(){
    setInterval(function() {
        timeEl.textContent ="Timer: " + secondsLeft;
        secondsLeft--;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            questionContainer.classList.add('hide');
            quizStart.classList.remove('hide');
            alert("You ran out of time! Review your notes and try again!")
          }

    }, 1000)
}

//questions
