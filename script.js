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
var answer1 = document.getElementById("ans1");
var answer2 = document.getElementById("ans2");
var answer3 = document.getElementById("ans3");
var answer4 = document.getElementById("ans4");
var submitButton = document.getElementById("submit-btn");
var userInitials = document.getElementById("initials")
var secondsLeft = 75;
var timeInterval ;
var scores = [];
    if(localStorage.getItem("scores")) {
        scores = JSON.parse(localStorage.getItem("scores"))
        
    }

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
answer1.addEventListener('click', selectAnswer); //or selected answer?
answer2.addEventListener('click', selectAnswer);
answer3.addEventListener('click', selectAnswer);
answer4.addEventListener('click', selectAnswer);
submitButton.addEventListener('click', storeScore)


//function to start quiz
function startQuiz(){
    timeEl.textContent ="Timer: " + secondsLeft;
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
    console.log(correctAnswer)
    showResult (correctAnswer);
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

//NOT WORKING PROPERLY, TA COULDNT HELP FIRGURE OUT
//function to show correct or wrong
function showResult(correctAnswer) {
    if (correctAnswer) {
        correctChoice.classList.remove('hide')
        secondsLeft += 10
        timeEl.textContent ="Timer: " + secondsLeft;
    }
    else{
        wrongChoice.classList.remove('hide') 
        secondsLeft -= 10
        timeEl.textContent ="Timer: " + secondsLeft;
    }
}

//function for resetting
function resetState(){
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
        
    }
    wrongChoice.classList.add('hide')
    correctChoice.classList.add('hide')
}

//function to submit score and initials 
function storeScore(event) {
    scores.push({
        initials: userInitials.value,
        score: secondsLeft
    })
    event.preventDefault();
    localStorage.setItem("scores", JSON.stringify(scores))
    clearInterval(timeInterval);
    window.location = "highscore.html"
}
// FIND OUT HOW TO RESET THE TIMER AFTER SUBMITTING SCORE AND AFTER IT RUNS OUT
//function to start timer
function startTimer(){
    timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent ="Timer: " + secondsLeft;
        if(secondsLeft === 0) {
            clearInterval(timeInterval);
            questionContainer.classList.add('hide');
            quizStart.classList.remove('hide');
            timeEl.textContent ="Timer: 0"
            alert("You ran out of time! Review your notes and try again!")
          }
    }, 1000)
}


