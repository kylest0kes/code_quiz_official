var timeEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var quizStart = document.getElementById("quiz-start")
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-buttons");

var shuffledQuestions;
var questionIndex;

var secondsLeft = 75;

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "Strings", correct: false },
            { text: "Booleans", correct: false },
            { text: "Alerts", correct: true },
            { text: "Numbers", correct: false},
        ],
    },
    {
        question: "The condition in an if / else statement is enclosed within ________.",
        answers: [
            { text: "Quotes", correct: false },
            { text: "Square Brackets", correct: false },
            { text: "Curly Brackets", correct: false },
            { text: "Parentheses", correct: true },
        ],
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers: [
            { text: "Booleans", correct: false },
            { text: "Numbers and Strings", correct: false },
            { text: "Other Arrays", correct: false },
            { text: "All of the Above", correct: true },
        ],
    },
    {
        question: "String Values must be included in ________ when being assigned to Variables.",
        answers: [
            { text: "Commas", correct: false },
            { text: "Quotes", correct: true },
            { text: "Curly Brackets", correct: false },
            { text: "Parentheses", correct: false },
        ],
    },
    {
        question: "A very useful tool, used during development and debugging, for printing content to the debugger is:",
        answers: [
            { text: "For Loops", correct: false },
            { text: "Console Log", correct: true },
            { text: "Terminal/Bash", correct: false },
            { text: "JavaScript", correct: false },
        ],
    },
];

startButton.addEventListener('click', startQuiz);

//why does timer have small delay on page startup?

//function to start quiz
function startQuiz(){
    startTimer();
    quizStart.classList.add('hide');
    questionContainer.classList.remove('hide');
    questionIndex = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    nextQuestion();
    
}

//function to set the next question
function nextQuestion (){
    resetState()
    showNextQuestion(shuffledQuestions[questionIndex])
    
}

//function to show next question
function showNextQuestion(question){
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        button.addEventListener('click', selectAnswer)
        answerEl.appendChild(button)
    })
}

//function for selecting an answer
function selectAnswer(e){

}

//function for reset
function resetState(){
    
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


