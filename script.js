//Global Variables
let startButton = document.getElementById('start-button'); 
let startPage = document.getElementById('start-page');
let timerClock = document.getElementById("timer-clock");
let questionBlock = document.getElementById("question-block");
let questionH1 = document.getElementById("question-h1");
let buttonA = document.getElementById("button-a");
let buttonB = document.getElementById("button-b");
let buttonC = document.getElementById("button-c");
let buttonD = document.getElementById("button-d");
let btnAnswers = document.querySelector(".btn-answers");
let secondsLeft = 75;
let score = 0;
let i = 0;

//Array for Questions and Answers
let questionsAnswers = [
    {
        question: "What kind of variable contains more than one value?",
        choices: ["A) Object", "B) Array", "C) String", "D) Value Pair"],
        answer: 1
    }, 
    {
        question: "Which of these is a function in JavaScript?",
        choices: ["A) var name = function() {};", "B) function name() {};", "C) () => {};", "D) All of the above"],
        answer: 3
    },
    {
        question: "Which of these is a library for JavaScript?",
        choices: ["A) Node.js", "B) React.js", "C) jQuery", "D) All of the above"],
        answer: 3
    }, 
    {
        question: "What keyword will not allow the variable to be reassigned or redeclared?",
        choices: ["A) var", "B) let", "C) const", "D) None of the above"],
        answer: 1
    },
    {
        question: "How do you select an element in DOM by its id?",
        choices: ["A) document.getElementById()", "B) document.getElementByClassName()", "C) document.getElementByTag()", "D) document.getElementByName()"],
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
};

//StartButton
startButton.addEventListener('click', function() {
    startPage.className = 'd-none';
    questionBlock.className = 'container text-center mt-5';
    printQuestionsAnswers();
    setTimer();
});

function printQuestionsAnswers() {
    questionH1.textContent = questionsAnswers[i].question;
    buttonA.textContent = questionsAnswers[i].choices[0];
    buttonB.textContent = questionsAnswers[i].choices[1];
    buttonC.textContent = questionsAnswers[i].choices[2];
    buttonD.textContent = questionsAnswers[i].choices[3];
};


btnAnswers.addEventListener('click', function(event) {
    i++;
    if (event.target.value === questionsAnswers[i].answer) {  
        printQuestionsAnswers();
        score++;
        console.log(score);
    } else {
        printQuestionsAnswers();
    }
    // if (i < questionsAnswers.length -1) {
    //     i++;
    // } else {

    // }
});