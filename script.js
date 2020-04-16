//why does timer have small delay on page startup?

var timeEl = document.getElementById("timer");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var quizStart = document.getElementById("quiz-start")
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer-buttons");
var correctChoice = document.getElementById("correct-choice");
var wrongChoice = document.getElementById("wrong-choice");
var finalPage = document.getElementById("final-page");
var userScore = document.getElementById("user-score");
var secondsLeft = 75;
var timeInterval ;

var shuffledQuestions;
var questionIndex;

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "Strings", correct: false },
            { text: "Booleans", correct: false },
            { text: "Alerts", correct: true },
            { text: "Numbers", correct: false },
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
nextButton.addEventListener('click', () => {
    questionIndex++
    nextQuestion()
    nextButton.classList.add('hide');
})

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
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerEl.appendChild(button)
    })
}

//function for selecting an answer
function selectAnswer(e){
    var selectedAnswerButton = e.target;
    var correctAnswer = selectedAnswerButton.dataset.correct;
    showResult ();
    if (shuffledQuestions.length > questionIndex + 1) {
        nextButton.classList.remove('hide');
    } 
    else {
        questionContainer.classList.add('hide');
        finalPage.classList.remove('hide');
        clearInterval(timeInterval);
        userScore.textContent = secondsLeft + "!"
    }
        
}

//function to show correct or wrong
function showResult() {
    
}

//function for resetting
function resetState(){
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}


//function to start timer
function startTimer(){
    var timeInterval = setInterval(function() {
        timeEl.textContent ="Timer: " + secondsLeft;
        secondsLeft--;
        if(secondsLeft === 0) {
            clearInterval(timeInterval);
            questionContainer.classList.add('hide');
            quizStart.classList.remove('hide');
            timeEl.textContent ="Timer: 0"
            alert("You ran out of time! Review your notes and try again!")
          }
    }, 1000)
}


