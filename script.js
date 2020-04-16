var timeEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var quizStart = document.getElementById("quiz-start")
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers");

var secondsLeft = 75;

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "Srings",
            "Booleans",
            "Alerts",
            "Numbers",
        ],
        correctAnswer: "Alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ________.",
        answers: [
            "Quotes",
            "Square Brackets",
            "Curly Brackets",
            "Parentheses",
        ],
        correctAnswer: "Parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers: [
            "Booleans",
            "Numbers and Strings",
            "Other Arrays",
            "All of the Above",
        ],
        correctAnswer: "All of the Above"
    },
    {
        question: "String Values must be included in ________ when being assigned to Variables.",
        answers: [
            "Commas",
            "Quotes",
            "Curly Brackets",
            "Parentheses",
        ],
        correctAnswer: "Quotes"
    },
    {
        question: "A very useful tool, used during development and debugging, for printing content to the debugger is:",
        answers: [
            "For Loops",
            "Console Log",
            "Terminal/Bash",
            "JavaScript",
        ],
        correctAnswer: "Console Log"
    },
];

startButton.addEventListener('click', startQuiz);

//why does timer have small delay on page startup?

//function to start quiz
function startQuiz(){
    startTimer();
    quizStart.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextQuestion();
    
}

//function to set the next question
function nextQuestion (){
    
}

//function to show next question
function showNextQuestion(){
    
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
