//Global Variables
let startButton = document.getElementById('start-button'); 
let startPage = document.getElementById('start-page');
let questionOnePage = document.getElementById('question-1');
let timerClock = document.getElementById("timer-clock");
let secondsLeft = 75;

//Array for Questions and Answers
let questionsAnswers = [
    {
        question: "What kind of variable contains more than one value?",
        choices: ["Object", "Array", "String", "Value Pair"],
        answer: 1
    }, 
    {
        question: "Which of these is a function in JavaScript?",
        choices: ["var name = function() {};", "function name() {};", "() => {};", "All of the above"],
        answer: 3
    },
    {
        question: "Which of these is a library for JavaScript?",
        choices: ["Node.js", "React.js", "jQuery", "All of the above"],
        answer: 3
    }, 
    {
        question: "What keyword will not allow the variable to be reassigned or redeclared?",
        choices: ["var", "let", "const", "None of the above"],
        answer: 1
    },
    {
        question: "How do you select an element in DOM by its id?",
        choices: ["document.getElementById()", "document.getElementByClassName()", "document.getElementByTag()", "document.getElementByName()"],
        answer: 0
    }  
];

//Timer
function setTimer() {
    let countdown = setInterval(() => {
        secondsLeft--;
        timerClock.innerHTML = `Timer: ${secondsLeft}`;

        if (secondsLeft === 0) {
            clearInterval(countdown);
        }
    }, 1000);
}

//StartButton
startButton.addEventListener('click', function() {
    startPage.className = 'd-none';
    questionOnePage.className = 'container text-center mt-5';
    setTimer();
})

function printQuestionsAnswers() {
    for (let i = 0; i < questionsAnswers.length; i++) {
        
    }
}